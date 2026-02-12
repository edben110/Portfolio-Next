# Script para copiar imágenes del proyecto original

$sourceFolder = "..\PortFolio"
$destFolder = ".\public"

# Crear carpeta public si no existe
if (-not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder
}

# Lista de archivos a copiar
$files = @(
    "logo.png",
    "perfil.png",
    "prove multivar.png",
    "aplicacion movil.jpeg",
    "radar ard.jpeg",
    "cashify prove.png",
    "seleccion prove.png",
    "prove scripts.png"
)

# Copiar archivos
foreach ($file in $files) {
    $sourcePath = Join-Path $sourceFolder $file
    $destPath = Join-Path $destFolder $file
    
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "✓ Copiado: $file" -ForegroundColor Green
    } else {
        Write-Host "✗ No encontrado: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nProceso completado!" -ForegroundColor Cyan
