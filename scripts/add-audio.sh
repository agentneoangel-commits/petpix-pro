#!/bin/bash
# Add trending audio to video
# Usage: ./add-audio.sh video.mp4 audio.mp3 [output.mp4]

set -e

if [ $# -lt 2 ]; then
    echo "Usage: $0 <video.mp4> <audio.mp3> [output.mp4]"
    echo ""
    echo "Example:"
    echo "  $0 videos/superhero.mp4 audio/trending-song.mp3"
    echo "  $0 videos/superhero.mp4 audio/trending-song.mp3 final/superhero-with-audio.mp4"
    exit 1
fi

VIDEO_FILE="$1"
AUDIO_FILE="$2"
OUTPUT_FILE="${3:-${VIDEO_FILE%.mp4}-with-audio.mp4}"

if [ ! -f "$VIDEO_FILE" ]; then
    echo "❌ Video file not found: $VIDEO_FILE"
    exit 1
fi

if [ ! -f "$AUDIO_FILE" ]; then
    echo "❌ Audio file not found: $AUDIO_FILE"
    exit 1
fi

echo "🎵 Adding audio to video..."
echo "Video: $VIDEO_FILE"
echo "Audio: $AUDIO_FILE"
echo "Output: $OUTPUT_FILE"

# Mix video with audio (audio loops if shorter than video)
ffmpeg -y -i "$VIDEO_FILE" -i "$AUDIO_FILE" -c:v copy -c:a aac -shortest "$OUTPUT_FILE" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Created: $OUTPUT_FILE"
else
    echo "❌ Failed to add audio"
    exit 1
fi
