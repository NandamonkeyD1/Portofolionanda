# ===== ADVANCED IMAGE OPTIMIZATION SCRIPT =====
# Optimizes images by resizing and reducing quality

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ADVANCED IMAGE OPTIMIZATION" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create optimized folder
$optimizedFolder = "images_optimized"
if (-not (Test-Path $optimizedFolder)) {
    New-Item -ItemType Directory -Path $optimizedFolder | Out-Null
    Write-Host "[+] Created optimized folder: $optimizedFolder" -ForegroundColor Green
}

# Load System.Drawing
Add-Type -AssemblyName System.Drawing

function Optimize-ImageAdvanced {
    param(
        [string]$sourcePath,
        [string]$destPath,
        [int]$maxWidth = 1000,
        [int]$jpegQuality = 80
    )
    
    try {
        $file = Get-Item $sourcePath
        $originalSize = [math]::Round($file.Length / 1KB, 2)
        
        # Load image
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new dimensions maintaining aspect ratio
        $width = $img.Width
        $height = $img.Height
        
        if ($width -gt $maxWidth) {
            $ratio = $maxWidth / $width
            $newWidth = $maxWidth
            $newHeight = [int]($height * $ratio)
        } else {
            $ratio = 0.8  # Still reduce by 20% even if smaller
            $newWidth = [int]($width * $ratio)
            $newHeight = [int]($height * $ratio)
        }
        
        # Create new bitmap
        $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($newImg)
        
        # High quality settings
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Draw resized image
        $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save as JPEG with compression (convert PNG to JPEG)
        $outputPath = [System.IO.Path]::ChangeExtension($destPath, ".jpg")
        
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, $jpegQuality
        )
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
            Where-Object { $_.MimeType -eq "image/jpeg" }
        
        $newImg.Save($outputPath, $jpegCodec, $encoderParams)
        
        # Cleanup
        $graphics.Dispose()
        $newImg.Dispose()
        $img.Dispose()
        
        # Get new size
        $newFile = Get-Item $outputPath
        $newSize = [math]::Round($newFile.Length / 1KB, 2)
        $reduction = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
        
        Write-Host "  $($file.Name) -> $($newFile.Name)" -ForegroundColor White
        Write-Host "    $($width)x$($height) -> $($newWidth)x$($newHeight)" -ForegroundColor Gray
        Write-Host "    $originalSize KB -> $newSize KB (Saved: $reduction%)" -ForegroundColor Green
        
        return @{
            Success = $true
            OriginalSize = $originalSize
            NewSize = $newSize
            Reduction = $reduction
            NewFileName = $newFile.Name
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

# Get all portfolio images (exclude profile)
$images = Get-ChildItem -File *.png, *.jpg, *.jpeg | Where-Object { 
    $_.Name -notmatch "profil" 
}

Write-Host "[*] Found $($images.Count) images to optimize" -ForegroundColor Yellow
Write-Host "[*] Strategy: Resize to max 1000px width + Convert to JPEG (80% quality)" -ForegroundColor Yellow
Write-Host ""

$totalOriginal = 0
$totalNew = 0
$successCount = 0
$conversions = @()

foreach ($image in $images) {
    $destPath = Join-Path $optimizedFolder $image.Name
    $result = Optimize-ImageAdvanced -sourcePath $image.FullName -destPath $destPath -maxWidth 1000 -jpegQuality 80
    
    if ($result.Success) {
        $totalOriginal += $result.OriginalSize
        $totalNew += $result.NewSize
        $successCount++
        
        if ($image.Extension -eq ".png") {
            $conversions += @{
                Old = $image.Name
                New = $result.NewFileName
            }
        }
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

if ($conversions.Count -gt 0) {
    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host "  FILE NAME CHANGES (PNG -> JPG)" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "You need to update index.html with these new filenames:" -ForegroundColor Yellow
    Write-Host ""
    foreach ($conv in $conversions) {
        Write-Host "  $($conv.Old) -> $($conv.New)" -ForegroundColor White
    }
    Write-Host ""
}

Write-Host "[+] Optimized images saved to: $optimizedFolder" -ForegroundColor Green
Write-Host "[!] Review the images, then replace originals if satisfied" -ForegroundColor Yellow
Write-Host ""
