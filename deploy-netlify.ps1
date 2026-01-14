# deploy-netlify.ps1
# Script de deploiement manuel LangLink vers Netlify

# REMPLACEZ cette URL par celle de votre build hook Netlify
$NETLIFY_HOOK = "https://api.netlify.com/build_hooks/69677498041fc5ac7298e4e2"

Write-Host ""
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "   Deploiement LangLink vers Netlify" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""

# Verification Git
Write-Host "Verification du statut Git..." -ForegroundColor Yellow
$gitStatus = git status --short

if ($gitStatus) {
    Write-Host ""
    Write-Host "ATTENTION: Modifications non commitees detectees :" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    $continue = Read-Host "Voulez-vous continuer le deploiement quand meme ? (o/N)"
    
    if ($continue -ne "o" -and $continue -ne "O") {
        Write-Host ""
        Write-Host "Deploiement annule." -ForegroundColor Red
        Write-Host ""
        exit
    }
} else {
    Write-Host "OK - Aucune modification en attente" -ForegroundColor Green
}

# Test du build Hugo local
Write-Host ""
Write-Host "Test du build Hugo en local..." -ForegroundColor Yellow

# Sauvegarde du dossier public s'il existe
if (Test-Path "public") {
    Write-Host "  Nettoyage du dossier public..." -ForegroundColor Gray
}

# Build Hugo
hugo --gc --minify

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERREUR: Le build Hugo a echoue !" -ForegroundColor Red
    Write-Host "  Verifiez les erreurs ci-dessus avant de deployer." -ForegroundColor Red
    Write-Host ""
    exit
}

Write-Host "OK - Build Hugo reussi !" -ForegroundColor Green

# Verification que le dossier public contient des fichiers
$publicFiles = Get-ChildItem -Path "public" -Recurse -File | Measure-Object
if ($publicFiles.Count -eq 0) {
    Write-Host ""
    Write-Host "ATTENTION: Le dossier public/ est vide !" -ForegroundColor Red
    Write-Host ""
    exit
}

Write-Host "  -> $($publicFiles.Count) fichiers generes dans public/" -ForegroundColor Gray

# Declenchement du build Netlify
Write-Host ""
Write-Host "Declenchement du build sur Netlify..." -ForegroundColor Yellow

try {
    $response = Invoke-WebRequest -Uri $NETLIFY_HOOK -Method POST -UseBasicParsing
    
    if ($response.StatusCode -eq 200) {
        Write-Host ""
        Write-Host "SUCCESS - Build Netlify declenche avec succes !" -ForegroundColor Green
        Write-Host ""
        Write-Host "Suivez la progression du deploiement ici :" -ForegroundColor Cyan
        Write-Host "  https://app.netlify.com" -ForegroundColor White
        Write-Host ""
        Write-Host "Le deploiement prendra environ 1-2 minutes..." -ForegroundColor Gray
        Write-Host ""
        
        # Statistiques
        $commitCount = git rev-list --count HEAD
        $lastCommit = git log -1 --pretty=format:"%h - %s (%ar)"
        
        Write-Host "Informations du deploiement :" -ForegroundColor Cyan
        Write-Host "  Total commits : $commitCount" -ForegroundColor Gray
        Write-Host "  Dernier commit : $lastCommit" -ForegroundColor Gray
        
    }
} catch {
    Write-Host ""
    Write-Host "ERREUR lors du declenchement Netlify !" -ForegroundColor Red
    Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifications a faire :" -ForegroundColor Yellow
    Write-Host "  1. L'URL du Build Hook est-elle correcte ?" -ForegroundColor White
    Write-Host "  2. Avez-vous une connexion internet ?" -ForegroundColor White
    Write-Host "  3. Le build hook existe-t-il encore dans Netlify ?" -ForegroundColor White
    Write-Host ""
    exit
}

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""
