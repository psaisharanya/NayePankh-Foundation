#!powershell
# Create a ZIP of the project root for submission.
# Run from project root in PowerShell: .\scripts\create_deploy_zip.ps1

$projRoot = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent
$outZip = Join-Path $projRoot "naye-pankh-site.zip"
if (Test-Path $outZip) { Remove-Item $outZip -Force }

Write-Host "Creating ZIP -> $outZip"

# Exclude .git folder and the output ZIP itself
$items = Get-ChildItem -Path $projRoot -Force | Where-Object { $_.Name -ne '.git' -and $_.Name -ne (Split-Path $outZip -Leaf) }
Compress-Archive -Path ($items | ForEach-Object { $_.FullName }) -DestinationPath $outZip -Force
Write-Host "ZIP created: $outZip"
