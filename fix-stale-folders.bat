@echo off
REM Run once inside the project folder (where package.json is), with the dev server stopped.
REM Deletes leftovers from older versions of the project and the build cache.
rmdir /s /q app\business-operations 2>nul
rmdir /s /q app\hiring-services 2>nul
rmdir /s /q app\it-solutions 2>nul
rmdir /s /q app\payroll-services 2>nul
rmdir /s /q app\sap-services 2>nul
rmdir /s /q app\shared-workspaces 2>nul
rmdir /s /q app\services\business-setup 2>nul
rmdir /s /q app\services\eor 2>nul
rmdir /s /q app\services\hr 2>nul
rmdir /s /q app\services\hr-operations 2>nul
rmdir /s /q app\services\it 2>nul
rmdir /s /q comps 2>nul
rmdir /s /q src 2>nul
rmdir /s /q .next 2>nul
echo Done. Now run: npm run dev
