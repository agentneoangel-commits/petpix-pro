#!/bin/bash
# PetPix Video Slideshow Generator
# Converts style images into TikTok/Instagram-friendly videos

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STYLES_DIR="$SCRIPT_DIR/../public/styles"
OUTPUT_DIR="$SCRIPT_DIR/../content/videos"
DATE=$(date +%Y-%m-%d)

# Video settings
RESOLUTION="1080x1920"  # 9:16 vertical for TikTok/Instagram
DURATION=12             # seconds
FPS=30

# Ensure directories exist
mkdir -p "$OUTPUT_DIR/$DATE"

echo "🎬 Generating video slideshows..."
echo "Input: $STYLES_DIR"
echo "Output: $OUTPUT_DIR/$DATE"

# Check for images
if [ ! -d "$STYLES_DIR" ] || [ -z "$(ls -A $STYLES_DIR/*.jpg 2>/dev/null)" ]; then
    echo "❌ No images found in $STYLES_DIR"
    echo "Run generate-styles.sh first to create style images"
    exit 1
fi

# Generate video for each style
for img in "$STYLES_DIR"/*.jpg; do
    filename=$(basename "$img" .jpg)
    output_file="$OUTPUT_DIR/$DATE/${filename}.mp4"
    
    echo ""
    echo "🎥 Creating video: $filename"
    
    # Create video with Ken Burns zoom effect
    ffmpeg -y -loop 1 -i "$img" -vf "
        scale=${RESOLUTION}:force_original_aspect_ratio=decrease,
        pad=${RESOLUTION}:(ow-iw)/2:(oh-ih)/2:black,
        zoompan=z='min(zoom+0.002,1.3)':d=$((DURATION*FPS)):s=${RESOLUTION},
        fade=in:0:15:fade=out:$((DURATION*FPS-15)):15
    " -c:v libx264 -t "$DURATION" -pix_fmt yuv420p -r "$FPS" "$output_file" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ Saved: $output_file"
    else
        echo "❌ Failed to create video: $filename"
    fi
done

echo ""
echo "🎉 Done! Created $(ls -1 $OUTPUT_DIR/$DATE/*.mp4 2>/dev/null | wc -l) videos"
echo "Location: $OUTPUT_DIR/$DATE"
echo ""
echo "Next steps:"
echo "1. Add trending audio: ./add-audio.sh $OUTPUT_DIR/$DATE/[video].mp4 [audio].mp3"
echo "2. Upload to TikTok/Instagram via Post For Me API"
