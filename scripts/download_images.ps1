# Downloads reference images into the project's assets folder.
# Run from project root in PowerShell: .\scripts\download_images.ps1

$assetsDir = Join-Path -Path $PSScriptRoot -ChildPath "..\assets"
if (-not (Test-Path $assetsDir)) { New-Item -ItemType Directory -Path $assetsDir | Out-Null }

$images = @(
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1600,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg'; file = 'hero.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg'; file = 'img1.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg'; file = 'img2.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg'; file = 'img3.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg'; file = 'img4.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg'; file = 'impact1.jpg' },
    @{ url = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg'; file = 'impact2.jpg' }
)

foreach ($img in $images) {
    $outPath = Join-Path $assetsDir $img.file
    Write-Host "Downloading $($img.url) -> $outPath"
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $outPath -UseBasicParsing
    } catch {
        Write-Warning "Failed to download $($img.url): $_"
    }
}

Write-Host "Done. Check the assets folder: .\assets\"
