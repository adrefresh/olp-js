@echo off
REM Run this once inside the project folder (where package.json is), with the dev server stopped.
rmdir /s /q app\services\business-operations 2>nul
rmdir /s /q app\services\it-services 2>nul
rmdir /s /q app\services\hr-payroll 2>nul
rmdir /s /q comps 2>nul
rmdir /s /q src 2>nul
rmdir /s /q .next 2>nul
echo Done. Now run: npm run dev
