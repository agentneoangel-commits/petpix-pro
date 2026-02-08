# PetPix Video Content Strategy
**Goal:** Fix TikTok engagement collapse (150 views → 10K+ target)
**Approach:** Image slideshows with trending audio + motion graphics

---

## Why Video Slideshows Work

**Static Images (Current):**
- ❌ Algorithm suppression - photos get ~10% of video reach
- ❌ No audio integration (TikTok is sound-first)
- ❌ Lower completion rate = lower distribution

**Video Slideshows (Solution):**
- ✅ Algorithm boost - any video format gets 3-5x distribution
- ✅ Audio sync - trending sounds drive discovery
- ✅ Motion holds attention - 3-5 sec per slide optimal
- ✅ Batch creation - 10 videos from 10 images + ffmpeg

---

## Content Format: "Larry Transformations"

### Template Structure

**Video Specs:**
- Duration: 7-15 seconds
- Resolution: 1080x1920 (9:16 vertical)
- Format: MP4, H.264

**Scene Breakdown:**

```
[0:00 - 0:02] Hook Frame
- Real Larry photo (before)
- Text overlay: "What if Larry was a..."
- Trending audio starts

[0:02 - 0:05] Suspense Build
- Black screen or blurred transition
- Text: "SUPERHERO" (style name)

[0:05 - 0:12] Reveal
- AI-generated image (after)
- Ken Burns zoom effect (slow zoom in)
- Text overlay with style name

[0:12 - 0:15] CTA
- Side-by-side before/after
- Text: "Link in bio to try!"
- Call-to-action sound effect
```

---

## Batch Production Workflow

### Step 1: Generate Style Images (Daily)
1. Use nano-banana-pro to create 10 Larry variations
2. One image per style (superhero, renaissance, etc.)
3. Save to `content/YYYY-MM-DD/images/`

### Step 2: Create Video Slideshows (Automated)
```bash
# Generate 10 videos from 10 images
for style in superhero renaissance astronaut royal wedding sports artist holiday beach corporate; do
  ffmpeg -loop 1 -i "input.jpg" -vf "
    zoompan=z='min(zoom+0.0015,1.5)':d=150:s=1080x1920,
    fade=in:0:30,fade=out:120:30
  " -c:v libx264 -t 15 -pix_fmt yuv420p "output_$style.mp4"
done
```

### Step 3: Add Trending Audio (Manual/API)
- Download trending audio from TikTok
- Mix with ffmpeg: `ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -c:a aac output.mp4`

### Step 4: Post via Post For Me API
- Instagram: Accepts video
- TikTok: Accepts video with audio
- Schedule: 3x daily (9am, 1pm, 7pm PST)

---

## Weekly Content Calendar

### Monday - Friday: Transformation Series
**Theme:** "Larry as [Style]"
- Mon: Superhero
- Tue: Renaissance  
- Wed: Astronaut
- Thu: Royal
- Fri: Wedding

**Format:** Before → After reveal video

### Saturday: Compilation/Reaction
**Theme:** "Best of the week" or "Owner reaction"
- 3-4 styles in one video
- Or: Film Josh reacting to generated images
- Higher engagement on weekends

### Sunday: User-Generated Content Prep
**Theme:** Setup for next week
- Create poll: "Which style next?"
- Tease upcoming styles
- Behind-the-scenes of generation process

---

## Posting Schedule (All Times PST)

| Time | Content Type | Platform |
|------|--------------|----------|
| 9:00 AM | Morning transformation | TikTok + Instagram |
| 1:00 PM | Midday style reveal | TikTok + Instagram |
| 7:00 PM | Evening compilation | TikTok + Instagram |

**Total:** 21 posts/week across both platforms

---

## Trending Audio Strategy

### How to Find Trending Audio (Automated Research)
1. **TikTok Creative Center** - Browse trending sounds weekly
2. **Competitor Analysis** - What audio are viral pet accounts using?
3. **Hashtag Tracking** - #trendingsounds #viralaudio

### Audio Categories That Work for Pet Content:
- **Dramatic reveals** - Orchestral drops, "Oh no" moments
- **Funny/cute** - Cartoon sound effects, baby laughter
- **Trending songs** - Top 10 TikTok songs (check weekly)
- **ASMR** - Satisfying sounds for pet videos

### Current Trending Audio (Feb 2026):
- Update weekly via trend research cron job
- Store in `trends/audio-recommendations.md`

---

## Automation Plan

### What Gets Automated:
✅ Image generation (nano-banana-pro)  
✅ Video creation (ffmpeg slideshows)  
✅ Scheduling (cron jobs)  
✅ Posting (Post For Me API)  

### What Needs Manual Touch:
⚠️ Trending audio selection (weekly update)  
⚠️ Reaction videos (requires Josh filming)  
⚠️ User submission responses  

### New Cron Jobs Needed:

```json
{
  "name": "petpix-video-generator",
  "schedule": "0 7 * * *",
  "task": "Generate 3 videos for today's posts using yesterday's images + trending audio"
}

{
  "name": "petpix-style-generator", 
  "schedule": "0 6 * * *",
  "task": "Generate 10 Larry style variations using nano-banana-pro"
}
```

---

## Engagement Recovery Metrics

### Week 1 Goals:
- Average views per post: 1,000+
- Follower growth: +200
- Link clicks: 20+

### Week 4 Goals:
- Average views per post: 10,000+
- Follower growth: +1,000  
- Link clicks: 100+
- 1 viral video (100K+ views)

### Success Indicators:
- ✅ View count >5x previous static posts
- ✅ Completion rate >50%
- ✅ Shares > Likes (indicates viral potential)

---

## A/B Test Ideas

### Test 1: Hook Variations
- A: "What if Larry was a..."
- B: "POV: Larry becomes a superhero"
- C: "Wait for it..."

### Test 2: Audio Types
- A: Trending pop song
- B: Dramatic orchestral
- C: Funny sound effects

### Test 3: Video Length
- A: 7 seconds (quick reveal)
- B: 12 seconds (build suspense)
- C: 15 seconds (full story)

### Test 4: CTA Placement
- A: End of video only
- B: Throughout video
- C: Text overlay vs voiceover

---

## Tools & Commands

### Video Generation (ffmpeg)
```bash
# Basic slideshow with zoom
ffmpeg -i input.jpg -vf "zoompan=z='min(zoom+0.001,1.3)':d=125" -t 15 output.mp4

# Add trending audio
ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -shortest final.mp4

# Batch process all styles
for img in *.jpg; do
  ffmpeg -i "$img" -vf "zoompan=z=1.1:d=150:s=1080x1920" -t 15 "${img%.jpg}.mp4"
done
```

### Image Generation (nano-banana-pro)
```bash
uv run ~/.openclaw/workspace/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Larry the dog as a [STYLE], highly detailed, 4K, professional photography" \
  --filename "2026-02-07-larry-[style].png" \
  --resolution 1K
```

---

## Immediate Action Items

### Today (Feb 7):
- [ ] Configure GEMINI_API_KEY for image generation
- [ ] Generate 10 Larry style images
- [ ] Create 3 test videos with ffmpeg
- [ ] Research current trending audio
- [ ] Post first video slideshow manually to test

### This Week:
- [ ] Set up automated video generation script
- [ ] Create batch processing pipeline
- [ ] Add new cron jobs for content generation
- [ ] Monitor engagement vs static posts

### Next Week:
- [ ] Analyze which styles perform best
- [ ] Double down on top 3 styles
- [ ] Introduce reaction video format
- [ ] Launch beta landing page

---

**Bottom Line:** Video slideshows with trending audio should recover engagement from ~150 views to 5K-10K per post. The automation pipeline lets us post 21x/week without manual work.
