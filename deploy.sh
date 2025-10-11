#!/bin/bash

# Build the React app
npm run build

# Create a temporary directory for deployment
mkdir -p docs

# Copy the build files to docs directory
cp -r build/* docs/

# Add .nojekyll file to prevent Jekyll processing
touch docs/.nojekyll

echo "Deployment files ready in docs/ directory"
echo "Commit and push to deploy to GitHub Pages"
