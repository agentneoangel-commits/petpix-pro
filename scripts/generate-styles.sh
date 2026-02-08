#!/bin/bash
# PetPix Style Image Generator
# Generates 10 style variations of Larry for the landing page

set -e

# Config
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR/../public/styles"
DATE=$(date +%Y-%m-%d)

# Check for GEMINI_API_KEY
if [ -z "$GEMINI_API_KEY" ]; then
    echo "❌ Error: GEMINI_API_KEY not set"
    echo "Set it with: export GEMINI_API_KEY=your_key_here"
    exit 1
fi

echo "🎨 Generating PetPix style images..."
echo "Output directory: $OUTPUT_DIR"

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Style definitions: "filename|prompt description"
declare -a STYLES=(
    "superhero|Larry the small tan dog wearing a red superhero cape, standing heroically on a city rooftop at sunset, comic book style, vibrant colors, dynamic pose, epic lighting"
    "renaissance|Larry the small tan dog as a Renaissance oil painting portrait, wearing royal attire with ruffled collar, classical art style, golden frame, museum quality, dramatic chiaroscuro lighting"
    "astronaut|Larry the small tan dog in a white NASA spacesuit, floating in space with Earth in background, stars and planets, cinematic sci-fi style, 4K detail"
    "royal|Larry the small tan dog as a king sitting on a golden throne, wearing a crown and royal robe, palace background, regal portrait style, luxurious details"
    "wedding|Larry the small tan dog in a wedding tuxedo with bow tie, romantic garden setting, soft lighting, professional pet photography style, elegant and cute"
    "sports|Larry the small tan dog wearing a basketball jersey, holding a ball, stadium crowd in background, sports action photography, energetic pose"
    "artist|Larry the small tan dog as a painter with a beret, holding a paintbrush and palette, art studio background with canvases, bohemian artistic style"
    "holiday|Larry the small tan dog wearing a Santa hat and Christmas scarf, snow falling, decorated Christmas tree background, cozy holiday atmosphere, warm lighting"
    "beach|Larry the small tan dog wearing sunglasses and a Hawaiian shirt, surfing on a wave, tropical beach sunset, fun vacation vibes, vibrant colors"
    "corporate|Larry the small tan dog in a business suit with a tie, sitting at a desk with laptop, modern office background, professional corporate headshot style"
)

# Generate each style
for style in "${STYLES[@]}"; do
    IFS='|' read -r filename prompt <<< "$style"
    
    echo ""
    echo "🖼️  Generating: $filename"
    
    uv run ~/.openclaw/workspace/skills/nano-banana-pro/scripts/generate_image.py \
        --prompt "$prompt" \
        --filename "$OUTPUT_DIR/${filename}.jpg" \
        --resolution 1K
    
    if [ $? -eq 0 ]; then
        echo "✅ Saved: $OUTPUT_DIR/${filename}.jpg"
    else
        echo "❌ Failed to generate: $filename"
    fi
    
    # Small delay to avoid rate limiting
    sleep 2
done

echo ""
echo "🎉 Done! Generated $(ls -1 $OUTPUT_DIR/*.jpg 2>/dev/null | wc -l) style images"
echo "Location: $OUTPUT_DIR"
