'use client';

import { useEffect, useRef } from 'react';

// ── Types ──────────────────────────────────────────────
type Vec2 = { x: number; y: number };

type Asteroid = {
  id: number;
  pos: Vec2;
  vel: Vec2;
  radius: number;
  angle: number;
  spin: number;
  verts: Vec2[];
  tier: number; // 3=large  2=medium  1=small
};

type Bullet = {
  pos: Vec2;
  vel: Vec2;
  life: number;
};

type Particle = {
  pos: Vec2;
  vel: Vec2;
  life: number;
  maxLife: number;
};

type Ship = {
  pos: Vec2;
  vel: Vec2;
  angle: number;
  thrusting: boolean;
  dead: boolean;
  respawnTimer: number;
  invincibleTimer: number;
};

// ── Helpers ────────────────────────────────────────────
let nextId = 0;

function rand(a: number, b: number) { return a + Math.random() * (b - a); }

function wrap(v: number, max: number) {
  if (v < 0) return v + max;
  if (v > max) return v - max;
  return v;
}

function dist(a: Vec2, b: Vec2) { return Math.hypot(a.x - b.x, a.y - b.y); }

const TIER_RADIUS: Record<number, number> = { 3: 55, 2: 30, 1: 14 };

function makeAsteroid(w: number, h: number, tier: number, near?: Vec2): Asteroid {
  const base = TIER_RADIUS[tier];
  const radius = base * rand(0.8, 1.2);
  const sides = Math.floor(rand(7, 13));
  const verts: Vec2[] = [];
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2;
    verts.push({ x: Math.cos(a) * radius * rand(0.6, 1.0), y: Math.sin(a) * radius * rand(0.6, 1.0) });
  }
  let pos: Vec2;
  if (near) {
    const a = Math.random() * Math.PI * 2;
    pos = { x: near.x + Math.cos(a) * radius * 2, y: near.y + Math.sin(a) * radius * 2 };
  } else {
    const horiz = Math.random() < 0.5;
    pos = horiz
      ? { x: Math.random() * w, y: Math.random() < 0.5 ? -radius : h + radius }
      : { x: Math.random() < 0.5 ? -radius : w + radius, y: Math.random() * h };
  }
  const speed = rand(0.4, 1.3) * (4 - tier) * 0.45 + 0.3;
  const dir = Math.random() * Math.PI * 2;
  return {
    id: nextId++,
    pos,
    vel: { x: Math.cos(dir) * speed, y: Math.sin(dir) * speed },
    radius,
    angle: Math.random() * Math.PI * 2,
    spin: rand(-0.018, 0.018),
    verts,
    tier,
  };
}

// ── Component ──────────────────────────────────────────
export default function RadioactiveRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Palette — white BG, gray borders
    const C_BG       = '#ffffff';
    const C_FILL     = '#f5f5f5';
    const C_STROKE   = '#8a8a8a';   // asteroids
    const C_SHIP_S   = '#606060';   // ship stroke (slightly darker)
    const C_THRUST   = '#b0b0b0';
    const C_BULLET   = '#505050';
    const C_PARTICLE = '#999999';
    const C_HUD      = '#777777';

    let w = 0, h = 0;
    let asteroids: Asteroid[] = [];
    let bullets: Bullet[] = [];
    let particles: Particle[] = [];
    let score = 0;
    let animId: number;

    const keys: Record<string, boolean> = {};
    let shootCooldown = 0;

    const ship: Ship = {
      pos: { x: 0, y: 0 },
      vel: { x: 0, y: 0 },
      angle: -Math.PI / 2,
      thrusting: false,
      dead: false,
      respawnTimer: 0,
      invincibleTimer: 0,
    };

    // ── Game helpers ──────────────────────────────────
    function spawnParticles(pos: Vec2, count: number, maxSpeed: number) {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = rand(0.5, maxSpeed);
        particles.push({
          pos: { x: pos.x, y: pos.y },
          vel: { x: Math.cos(a) * s, y: Math.sin(a) * s },
          life: Math.floor(rand(25, 55)),
          maxLife: 55,
        });
      }
    }

    function killShip() {
      if (ship.invincibleTimer > 0 || ship.dead) return;
      ship.dead = true;
      ship.respawnTimer = 200;
      spawnParticles(ship.pos, 22, 3.5);
    }

    function splitAsteroid(a: Asteroid, idx: number) {
      asteroids.splice(idx, 1);
      spawnParticles(a.pos, 10, 2.5);
      score += (4 - a.tier) * 10;
      if (a.tier > 1) {
        asteroids.push(makeAsteroid(w, h, a.tier - 1, a.pos));
        asteroids.push(makeAsteroid(w, h, a.tier - 1, a.pos));
      }
    }

    function resetShip() {
      ship.pos = { x: w / 2, y: h / 2 };
      ship.vel = { x: 0, y: 0 };
      ship.angle = -Math.PI / 2;
      ship.dead = false;
      ship.invincibleTimer = 200;
    }

    // ── Resize ────────────────────────────────────────
    function resize() {
      if (!canvas) return;
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      resetShip();
      asteroids = [];
      bullets   = [];
      particles = [];
      score     = 0;
      const n = Math.max(4, Math.floor(w / 200));
      for (let i = 0; i < n; i++) asteroids.push(makeAsteroid(w, h, 3));
    }

    // ── Draw functions ────────────────────────────────
    function drawAsteroid(a: Asteroid) {
      ctx!.save();
      ctx!.translate(a.pos.x, a.pos.y);
      ctx!.rotate(a.angle);
      ctx!.beginPath();
      ctx!.moveTo(a.verts[0].x, a.verts[0].y);
      for (let i = 1; i < a.verts.length; i++) ctx!.lineTo(a.verts[i].x, a.verts[i].y);
      ctx!.closePath();
      ctx!.fillStyle   = C_FILL;
      ctx!.fill();
      ctx!.strokeStyle = C_STROKE;
      ctx!.lineWidth   = 2;
      ctx!.stroke();
      ctx!.restore();
    }

    function drawShip() {
      if (ship.dead) return;
      if (ship.invincibleTimer > 0 && Math.floor(ship.invincibleTimer / 7) % 2 === 0) return;

      const sz = 14;
      ctx!.save();
      ctx!.translate(ship.pos.x, ship.pos.y);
      ctx!.rotate(ship.angle);

      // Thruster flame
      if (ship.thrusting) {
        ctx!.beginPath();
        ctx!.moveTo(-sz * 0.38, sz * 0.3);
        ctx!.lineTo(-sz * 0.95, 0);
        ctx!.lineTo(-sz * 0.38, -sz * 0.3);
        ctx!.strokeStyle = C_THRUST;
        ctx!.lineWidth   = 2;
        ctx!.stroke();
      }

      // Body
      ctx!.beginPath();
      ctx!.moveTo(sz, 0);
      ctx!.lineTo(-sz * 0.6,  sz * 0.6);
      ctx!.lineTo(-sz * 0.28, 0);
      ctx!.lineTo(-sz * 0.6, -sz * 0.6);
      ctx!.closePath();
      ctx!.fillStyle   = C_FILL;
      ctx!.fill();
      ctx!.strokeStyle = C_SHIP_S;
      ctx!.lineWidth   = 2;
      ctx!.stroke();
      ctx!.restore();
    }

    function drawBullet(b: Bullet) {
      ctx!.beginPath();
      ctx!.arc(b.pos.x, b.pos.y, 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = C_BULLET;
      ctx!.fill();
    }

    function drawParticles() {
      for (const p of particles) {
        const alpha = p.life / p.maxLife;
        ctx!.beginPath();
        ctx!.arc(p.pos.x, p.pos.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(153,153,153,${alpha.toFixed(2)})`;
        ctx!.fill();
      }
    }

    function drawHUD() {
      ctx!.save();
      ctx!.fillStyle  = C_HUD;
      ctx!.font       = 'bold 13px monospace';
      ctx!.fillText(`SCORE: ${score}`, 20, 30);

      if (ship.dead && ship.respawnTimer > 0) {
        ctx!.font = 'bold 18px monospace';
        const msg = '— DESTROYED — Reappearing…';
        const tw  = ctx!.measureText(msg).width;
        ctx!.fillText(msg, (w - tw) / 2, h / 2);
      }
      ctx!.restore();
    }

    // ── Input ─────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))
        e.preventDefault();
    };
    const onKeyUp = (e: KeyboardEvent) => { keys[e.code] = false; };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);

    // ── Main loop ─────────────────────────────────────
    function loop() {
      animId = requestAnimationFrame(loop);

      // Background
      ctx!.fillStyle = C_BG;
      ctx!.fillRect(0, 0, w, h);

      // ── Ship update ───────────────────────────────
      if (!ship.dead) {
        if (keys['ArrowLeft'])  ship.angle -= 0.055;
        if (keys['ArrowRight']) ship.angle += 0.055;

        ship.thrusting = !!keys['ArrowUp'];
        if (ship.thrusting) {
          ship.vel.x += Math.cos(ship.angle) * 0.22;
          ship.vel.y += Math.sin(ship.angle) * 0.22;
        }
        if (keys['ArrowDown']) {
          ship.vel.x -= Math.cos(ship.angle) * 0.12;
          ship.vel.y -= Math.sin(ship.angle) * 0.12;
        }

        // Shoot
        shootCooldown--;
        if (keys['Space'] && shootCooldown <= 0) {
          bullets.push({
            pos: {
              x: ship.pos.x + Math.cos(ship.angle) * 17,
              y: ship.pos.y + Math.sin(ship.angle) * 17,
            },
            vel: {
              x: ship.vel.x + Math.cos(ship.angle) * 8,
              y: ship.vel.y + Math.sin(ship.angle) * 8,
            },
            life: 72,
          });
          shootCooldown = 11;
        }

        // Drag & speed cap
        ship.vel.x *= 0.991;
        ship.vel.y *= 0.991;
        const spd = Math.hypot(ship.vel.x, ship.vel.y);
        if (spd > 5) { ship.vel.x = (ship.vel.x / spd) * 5; ship.vel.y = (ship.vel.y / spd) * 5; }

        ship.pos.x = wrap(ship.pos.x + ship.vel.x, w);
        ship.pos.y = wrap(ship.pos.y + ship.vel.y, h);
        if (ship.invincibleTimer > 0) ship.invincibleTimer--;

        // Ship ↔ asteroid collision
        if (ship.invincibleTimer === 0) {
          for (const a of asteroids) {
            if (dist(ship.pos, a.pos) < a.radius + 12) { killShip(); break; }
          }
        }
      } else {
        ship.respawnTimer--;
        if (ship.respawnTimer <= 0) resetShip();
      }

      // ── Asteroids update & draw ───────────────────
      for (const a of asteroids) {
        a.pos.x = wrap(a.pos.x + a.vel.x, w);
        a.pos.y = wrap(a.pos.y + a.vel.y, h);
        a.angle += a.spin;
        drawAsteroid(a);
      }

      // Refill
      if (asteroids.length < 3) asteroids.push(makeAsteroid(w, h, 3));

      // ── Bullets update, draw & collision ─────────
      bullets = bullets.filter(b => b.life > 0);
      for (let bi = bullets.length - 1; bi >= 0; bi--) {
        const b = bullets[bi];
        b.pos.x = wrap(b.pos.x + b.vel.x, w);
        b.pos.y = wrap(b.pos.y + b.vel.y, h);
        b.life--;
        let hit = false;
        for (let ai = asteroids.length - 1; ai >= 0; ai--) {
          if (dist(b.pos, asteroids[ai].pos) < asteroids[ai].radius) {
            splitAsteroid(asteroids[ai], ai);
            bullets.splice(bi, 1);
            hit = true;
            break;
          }
        }
        if (!hit) drawBullet(b);
      }

      // ── Particles ────────────────────────────────
      particles = particles.filter(p => p.life > 0);
      for (const p of particles) {
        p.pos.x += p.vel.x;
        p.pos.y += p.vel.y;
        p.life--;
      }
      drawParticles();

      drawShip();
      drawHUD();
    }

    resize();
    loop();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize',  resize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup',   onKeyUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}
