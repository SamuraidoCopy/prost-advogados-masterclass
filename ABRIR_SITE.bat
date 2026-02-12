@echo off
setlocal
cd /d "%~dp0"

echo ==================================================
echo   Dra. Juliana Prost - Protecao Empresarial
echo ==================================================
echo.

if not exist node_modules (
    echo [1/2] Instalando componentes necessarios...
    echo (Isso pode levar alguns minutos na primeira vez)
    call npm install
)

echo.
echo [2/2] Iniciando servidor do site...
echo O seu navegador abrira automaticamente em segundos.
echo.
echo (Para fechar o site, feche esta janela preta)
echo.

:: Inicia o servidor e abre o navegador
start "" http://localhost:8080
npm run dev -- --port 8080 --host
pause
