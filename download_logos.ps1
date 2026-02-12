
$logos = @{
    "indian-railways.png" = "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png"
    "amity.png" = "https://upload.wikimedia.org/wikipedia/en/9/9f/Amity_University_logo.png"
    "sharda.svg" = "https://upload.wikimedia.org/wikipedia/en/4/4f/Sharda_University_logo.svg"
    "ordnance.png" = "https://upload.wikimedia.org/wikipedia/commons/2/29/Ordnance_Factory_Board_Logo.png"
    "galgotias.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Galgotias_University_logo.svg/1200px-Galgotias_University_logo.svg.png"
    "shiv-nadar.svg" = "https://upload.wikimedia.org/wikipedia/en/8/8e/Shiv_Nadar_University_Logo.svg"
    "aiims.png" = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/AIIMS_New_Delhi.svg/1200px-AIIMS_New_Delhi.svg.png"
    "cars24.svg" = "https://upload.wikimedia.org/wikipedia/commons/1/12/Cars24_logo.svg"
    "dtu.png" = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU_Delhi_Official_Logo.svg/1200px-DTU_Delhi_Official_Logo.svg.png"
    "euler.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Euler_Motors_Logo.png/800px-Euler_Motors_Logo.png"
    "asahi.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Asahi_India_Glass_Logo.svg/1024px-Asahi_India_Glass_Logo.svg.png"
}

$dest = "public\photo\logos"
if (!(Test-Path $dest)) { New-Item -ItemType Directory -Force -Path $dest }

foreach ($name in $logos.Keys) {
    $url = $logos[$name]
    $path = Join-Path $dest $name
    Write-Host "Downloading $name from $url"
    try {
        Invoke-WebRequest -Uri $url -OutFile $path -UserAgent "Mozilla/5.0"
        Write-Host "Success: $name"
    } catch {
        Write-Host "Failed to download $name : $_"
    }
}
