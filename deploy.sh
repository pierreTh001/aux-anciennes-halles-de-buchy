#!/bin/bash
set -e
BUCKET="aux-anciennes-halles-de-buchy"
PROJECT="td-web-489713"

echo "📦 Build React..."
npm install && npm run build

echo "🪣 Création bucket..."
gcloud storage buckets create gs://$BUCKET --project=$PROJECT --location=europe-west1 --uniform-bucket-level-access 2>/dev/null || true

echo "🌐 Config site statique..."
gcloud storage buckets update gs://$BUCKET --project=$PROJECT --web-main-page-suffix=index.html --web-error-page=index.html

echo "🔓 Accès public..."
gcloud storage buckets add-iam-policy-binding gs://$BUCKET --member=allUsers --role=roles/storage.objectViewer --project=$PROJECT

echo "🚀 Upload..."
gcloud storage cp dist/** gs://$BUCKET/ --recursive --project=$PROJECT

echo "✅ En ligne : https://storage.googleapis.com/$BUCKET/index.html"