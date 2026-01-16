# ===== IMAGE OPTIMIZATION SCRIPT =====
# Optimizes PNG and JPEG images for web portfolio

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IMAGE OPTIMIZATION SCRIPT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create backup folder
$backupFolder = "images_backup_original"
if (-not (Test-Path $backupFolder)) {
    New-Item -ItemType Directory -Path $backupFolder | Out-Null
    Write-Host "[+] Created backup folder: $backupFolder" -ForegroundColor Green
}

# Load System.Drawing assembly
Add-Type -AssemblyName System.Drawing

# Function to optimize image
function Optimize-Image {
    param(
        [string]$imagePath,
        [int]$maxWidth = 1200,
        [int]$quality = 85
    )
    
    try {
        $file = Get-Item $imagePath
        $originalSize = [math]::Round($file.Length / 1KB, 2)
        
        # Backup original
        $backupPath = Join-Path $backupFolder $file.Name
        if (-not (Test-Path $backupPath)) {
            Copy-Item $imagePath $backupPath
        }
        
        # Load image
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new dimensions
        $width = $img.Width
        $height = $img.Height
        
        if ($width -gt $maxWidth) {
            $ratio = $maxWidth / $width
            $newWidth = $maxWidth
            $newHeight = [int]($height * $ratio)
        } else {
            $newWidth = $width
            $newHeight = $height
        }
        
        # Create new bitmap
        $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($newImg)
        
        # Set high quality rendering
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Draw resized image
        $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save with compression
        $tempPath = "$imagePath.tmp"
        
        if ($file.Extension -eq ".jpg" -or $file.Extension -eq ".jpeg") {
            # JPEG compression
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality, $quality
            )
            $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
                Where-Object { $_.MimeType -eq "image/jpeg" }
            $newImg.Save($tempPath, $jpegCodec, $encoderParams)
        } else {
            # PNG compression (convert to 24-bit)
            $newImg.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        }
        
        # Cleanup
        $graphics.Dispose()
        $newImg.Dispose()
        $img.Dispose()
        
        # Replace original
        Start-Sleep -Milliseconds 100
        Remove-Item $imagePath -Force
        Move-Item $tempPath $imagePath -Force
        
        # Get new size
        $newFile = Get-Item $imagePath
        $newSize = [math]::Round($newFile.Length / 1KB, 2)
        $reduction = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
        
        Write-Host "  $($file.Name)" -ForegroundColor White
        Write-Host "    Original: $originalSize KB | New: $newSize KB | Saved: $reduction%" -ForegroundColor Green
        
        return @{
            Success = $true
            OriginalSize = $originalSize
            NewSize = $newSize
            Reduction = $reduction
        }
        
    } catch {
        Write-Host "  [ERROR] $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        return @{
            Success = $false
            OriginalSize = 0
            NewSize = 0
            Reduction = 0
        }
    }
}

# Get all images
$images = Get-ChildItem -File *.png, *.jpg, *.jpeg | Where-Object { $_.Name -notmatch "profil" }

Write-Host "[*] Found $($images.Count) images to optimize" -ForegroundColor Yellow
Write-Host ""

$totalOriginal = 0
$totalNew = 0
$successCount = 0

foreach ($image in $images) {
    $result = Optimize-Image -imagePath $image.FullName -maxWidth 1200 -quality 85
    
    if ($result.Success) {
        $totalOriginal += $result.OriginalSize
        $totalNew += $result.NewSize
        $successCount++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OPTIMIZATION COMPLETE!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Images Optimized: $successCount / $($images.Count)" -ForegroundColor Green
Write-Host "Total Original Size: $([math]::Round($totalOriginal/1024, 2)) MB" -ForegroundColor Yellow
Write-Host "Total New Size: $([math]::Round($totalNew/1024, 2)) MB" -ForegroundColor Green
Write-Host "Total Saved: $([math]::Round(($totalOriginal - $totalNew)/1024, 2)) MB ($([math]::Round((($totalOriginal - $totalNew) / $totalOriginal) * 100, 1))%)" -ForegroundColor Cyan
Write-Host ""
Write-Host "[+] Original images backed up to: $backupFolder" -ForegroundColor Green
Write-Host ""
