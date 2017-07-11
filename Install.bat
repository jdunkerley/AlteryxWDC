@echo off
powershell "gci . -Recurse | Unblock-File"
powershell "Start-Process -FilePath powershell.exe -ArgumentList '%~fs0\..\InstallerHTML.ps1', '%~fs0\..\AlteryxWDCInput' -verb RunAs -Wait"