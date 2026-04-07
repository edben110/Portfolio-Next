'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from './ThemeContext';

export default function TerminalMode() {
  const { language, theme, toggleTheme, setLanguage, setTerminalMode } = useTheme();
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  const terminalText = useMemo(
    () => ({
      es: {
        welcome: [
          'Terminal mode activo.',
          'Escribe help para ver comandos disponibles.',
        ],
        prompt: 'edben@portfolio:~$',
        placeholder: 'Escribe un comando... (help)',
        unknown: (cmd: string) => `Comando no reconocido: ${cmd}. Usa help.`,
        commands: {
          help: [
            'Comandos disponibles:',
            '- help: mostrar ayuda',
            '- about: resumen profesional',
            '- skills: stack principal',
            '- projects: proyectos destacados',
            '- experience: experiencia academica y laboral',
            '- contact: canales de contacto',
            '- theme: alternar tema claro/oscuro',
            '- lang es|en: cambiar idioma',
            '- clear: limpiar terminal',
            '- gui: volver a la vista visual',
          ],
          about: [
            'Perfil:',
            'Ingeniero de software en formacion con enfoque full-stack, APIs e IA aplicada.',
            'Interes principal en soluciones web, automatizacion y experiencias interactivas.',
          ],
          skills: [
            'Stack:',
            'Frontend: Next.js, React, TypeScript, Tailwind.',
            'Backend: Flask, Django, Spring Boot.',
            'Datos/IA: BERT, NLP, MongoDB, PostgreSQL.',
            'Mobile/IoT: Flutter, Arduino, ThingSpeak.',
          ],
          projects: [
            'Proyectos:',
            '- MultiVar-3D (Next.js + Django + Three.js)',
            '- PotenGraf (Flutter + IoT)',
            '- Tone-Static (Next.js + API de musica)',
            '- Cashify (Spring Boot + MongoDB + React)',
            '- MicroSelectIA (Flask + BERT + NLP)',
            '- Black Night Guns (JavaScript + HTML5)',
          ],
          experience: [
            'Experiencia:',
            '- Academica: Ingenieria de Software (UCC).',
            '- Laboral: bienestar universitario, gestion documental, tutoria.',
          ],
          contact: [
            'Contacto:',
            '- Email: disponible en seccion Contacto',
            '- LinkedIn y GitHub: accesibles desde el portafolio',
            '- WhatsApp: boton flotante en vista visual',
          ],
          clear: [],
          gui: ['Saliendo de terminal mode...'],
          langEs: ['Idioma cambiado a espanol.'],
          langEn: ['Language changed to English.'],
          theme: ['Tema alternado.'],
        },
      },
      en: {
        welcome: [
          'Terminal mode enabled.',
          'Type help to see available commands.',
        ],
        prompt: 'edben@portfolio:~$',
        placeholder: 'Type a command... (help)',
        unknown: (cmd: string) => `Unknown command: ${cmd}. Use help.`,
        commands: {
          help: [
            'Available commands:',
            '- help: show help',
            '- about: professional summary',
            '- skills: core tech stack',
            '- projects: highlighted projects',
            '- experience: academic and professional path',
            '- contact: contact channels',
            '- theme: toggle light/dark theme',
            '- lang es|en: change language',
            '- clear: clear terminal',
            '- gui: go back to visual mode',
          ],
          about: [
            'Profile:',
            'Software engineering student focused on full-stack development, APIs and applied AI.',
            'Main interests: web solutions, automation and interactive experiences.',
          ],
          skills: [
            'Stack:',
            'Frontend: Next.js, React, TypeScript, Tailwind.',
            'Backend: Flask, Django, Spring Boot.',
            'Data/AI: BERT, NLP, MongoDB, PostgreSQL.',
            'Mobile/IoT: Flutter, Arduino, ThingSpeak.',
          ],
          projects: [
            'Projects:',
            '- MultiVar-3D (Next.js + Django + Three.js)',
            '- PotenGraf (Flutter + IoT)',
            '- Tone-Static (Next.js + music API)',
            '- Cashify (Spring Boot + MongoDB + React)',
            '- MicroSelectIA (Flask + BERT + NLP)',
            '- Black Night Guns (JavaScript + HTML5)',
          ],
          experience: [
            'Experience:',
            '- Academic: Software Engineering (UCC).',
            '- Professional: university wellbeing, document management, tutoring.',
          ],
          contact: [
            'Contact:',
            '- Email: available in Contact section',
            '- LinkedIn and GitHub: available across the portfolio',
            '- WhatsApp: floating button in visual mode',
          ],
          clear: [],
          gui: ['Leaving terminal mode...'],
          langEs: ['Idioma cambiado a espanol.'],
          langEn: ['Language changed to English.'],
          theme: ['Theme toggled.'],
        },
      },
    }),
    []
  );

  const current = terminalText[language];

  useEffect(() => {
    setHistory(current.welcome);
  }, [current.welcome]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  const pushLines = (lines: string[]) => {
    setHistory((prev) => [...prev, ...lines]);
  };

  const runCommand = (raw: string) => {
    const normalized = raw.trim();
    if (!normalized) return;

    setHistory((prev) => [...prev, `${current.prompt} ${normalized}`]);

    const [cmd, arg] = normalized.toLowerCase().split(/\s+/);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'gui') {
      pushLines(current.commands.gui);
      setTimeout(() => setTerminalMode(false), 250);
      return;
    }

    if (cmd === 'theme') {
      toggleTheme();
      pushLines(current.commands.theme);
      return;
    }

    if (cmd === 'lang') {
      if (arg === 'es') {
        setLanguage('es');
        pushLines(current.commands.langEs);
        return;
      }
      if (arg === 'en') {
        setLanguage('en');
        pushLines(current.commands.langEn);
        return;
      }
      pushLines([language === 'es' ? 'Uso: lang es|en' : 'Usage: lang es|en']);
      return;
    }

    const map: Record<string, string[]> = {
      help: current.commands.help,
      about: current.commands.about,
      skills: current.commands.skills,
      projects: current.commands.projects,
      experience: current.commands.experience,
      contact: current.commands.contact,
    };

    if (map[cmd]) {
      pushLines(map[cmd]);
      return;
    }

    pushLines([current.unknown(normalized)]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    runCommand(command);
    setCommand('');
  };

  return (
    <section id="terminal" className="relative z-10 pt-28 pb-12 px-4 min-h-screen">
      <div
        className={`mx-auto max-w-5xl rounded-2xl border overflow-hidden ${
          theme === 'dark'
            ? 'bg-black/80 border-matrix-green/40 shadow-[0_0_35px_rgba(0,255,65,0.25)]'
            : 'bg-white/90 border-black/20 shadow-[0_10px_40px_rgba(0,0,0,0.12)]'
        }`}
      >
        <div
          className={`px-4 py-3 border-b flex items-center justify-between ${
            theme === 'dark' ? 'border-matrix-green/30' : 'border-black/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className={`text-xs tracking-[0.16em] uppercase ${theme === 'dark' ? 'text-matrix-green' : 'text-black'}`}>
            Terminal Mode
          </p>
        </div>

        <div
          ref={outputRef}
          className={`h-[62vh] overflow-y-auto px-4 py-4 font-mono text-sm leading-7 ${
            theme === 'dark' ? 'text-matrix-green' : 'text-black'
          }`}
        >
          {history.map((line, idx) => (
            <p key={`${line}-${idx}`}>{line}</p>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className={`px-4 py-3 border-t flex items-center gap-3 ${
            theme === 'dark' ? 'border-matrix-green/30' : 'border-black/10'
          }`}
        >
          <span className={`font-mono text-sm ${theme === 'dark' ? 'text-matrix-green' : 'text-black'}`}>
            {current.prompt}
          </span>
          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className={`flex-1 bg-transparent outline-none font-mono text-sm ${
              theme === 'dark' ? 'text-matrix-green placeholder:text-matrix-green/45' : 'text-black placeholder:text-black/45'
            }`}
            placeholder={current.placeholder}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      </div>
    </section>
  );
}
