# 🎨 AI Image Generation Prompts - Larry the Cat
## Date: February 7, 2026
## Model: nano-banana-pro or similar AI image generator

---

## STYLE 1: Superhero Larry

### Primary Prompt:
```
Majestic orange tabby cat as a superhero, wearing red cape flowing in wind and blue suit with golden emblem on chest, flying pose above city skyline at sunset, dramatic orange and purple sky, comic book illustration style, bold outlines, vibrant colors, heroic determined expression, green eyes gleaming, buildings silhouetted below, lens flare effects, high detail, cinematic composition, Marvel/DC comic aesthetic, 8k quality
```

### Negative Prompt:
```
blurry, low quality, deformed, extra legs, extra tail, mutated, ugly, duplicate, watermark, signature, text, cropped, out of frame, worst quality, low resolution, error, bad anatomy
```

### Settings:
- **Aspect Ratio:** 1:1 (1024x1024) for Instagram, 9:16 (1080x1920) for TikTok
- **Style:** Comic Book / Illustration
- **CFG Scale:** 7-8
- **Steps:** 30-50

### Variations:
1. **Action Pose:** "Flying upward with fist raised"
2. **Landing Pose:** "Hero landing on building rooftop"
3. **Portrait:** "Chest-up heroic pose with cape billowing"

---

## STYLE 2: Renaissance Larry

### Primary Prompt:
```
Noble orange tabby cat as Renaissance royalty, wearing elaborate golden crown with jewels and deep red velvet robes with ermine trim, sitting regally on ornate golden throne, oil painting style in manner of Rembrandt or Velazquez, classical portrait lighting with chiaroscuro, castle interior background with tapestries, dignified proud expression, detailed fur texture, Baroque composition, rich warm colors, gilded frame visible, 16th century European royal portrait aesthetic, museum quality artwork
```

### Negative Prompt:
```
modern clothing, contemporary setting, blurry, low quality, cartoon, anime, digital art style, deformed, extra limbs, mutation, text, watermark, signature, cropped, worst quality
```

### Settings:
- **Aspect Ratio:** 3:4 or 4:5 for classic portrait feel
- **Style:** Oil Painting / Classical Art
- **CFG Scale:** 7-9
- **Steps:** 40-60 (for painterly texture)

### Variations:
1. **King:** "Wearing crown and holding scepter"
2. **Queen:** "With elaborate headdress and jewelry"
3. **Duke:** "Military uniform with medals"

---

## STYLE 3: Astronaut Larry

### Primary Prompt:
```
Brave orange tabby cat as astronaut, wearing white NASA-style space suit with mission patches and American flag, floating in zero gravity pose, Earth visible in background with blue oceans and white clouds, deep space backdrop with stars and colorful nebula, sci-fi illustration style, dramatic rim lighting from sun, reflections on helmet visor, detailed space suit texture, cosmic atmosphere, photorealistic rendering, NASA photography aesthetic, vibrant space colors, high detail, cinematic composition
```

### Negative Prompt:
```
atmosphere, clouds around cat, earth gravity, blurry, low quality, cartoon style, deformed suit, extra limbs, mutation, text, watermark, signature, cropped, worst quality, indoor setting
```

### Settings:
- **Aspect Ratio:** 16:9 for cinematic feel, 1:1 for social
- **Style:** Photorealistic / Sci-Fi
- **CFG Scale:** 7-8
- **Steps:** 40-50

### Variations:
1. **Spacewalk:** "Outside ISS with solar panels visible"
2. **Moon Landing:** "Standing on lunar surface with Earthrise"
3. **Mars:** "On red planet surface with rover in background"

---

## STYLE 4: Wizard Larry (Bonus)

### Primary Prompt:
```
Wise orange tabby cat as fantasy wizard, wearing pointed blue wizard hat with stars and crescent moons, flowing purple robe with gold trim, holding glowing magical staff with crystal orb, ancient mystical library background with floating spell books and candles, magical particle effects and spell circles, enchanted atmosphere with purple and gold lighting, fantasy art style, detailed fur, mystical wise expression, sparkles and magical aura, DnD/fantasy RPG aesthetic, high fantasy illustration, atmospheric lighting
```

### Negative Prompt:
```
modern clothing, sci-fi elements, blurry, low quality, cartoon style, anime, deformed, extra limbs, mutation, text, watermark, signature, cropped, worst quality, bright modern lighting
```

### Settings:
- **Aspect Ratio:** 2:3 for vertical scroll feel
- **Style:** Fantasy Art / Illustration
- **CFG Scale:** 7-9
- **Steps:** 35-50

---

## STYLE 5: Rockstar Larry (For Poll)

### Primary Prompt:
```
Cool orange tabby cat as rockstar musician, wearing leather jacket with studs and sunglasses, playing electric guitar, on concert stage with dramatic lighting and smoke effects, crowd silhouettes in background, stage lights creating lens flares, rock and roll aesthetic, dynamic pose, confident cool expression, concert photography style, vibrant purple and red stage lighting, energetic atmosphere, 1980s rock vibe
```

---

## STYLE 6: Pirate Larry (For Poll)

### Primary Prompt:
```
Adventurous orange tabby cat as pirate captain, wearing tricorn hat with feather and eye patch, red bandana, standing on ship deck with ocean and sunset behind, holding treasure map, wooden ship wheel visible, seafaring atmosphere, golden hour lighting, nautical adventure style, detailed pirate costume, confident swagger pose, Caribbean pirate aesthetic
```

---

## STYLE 7: Spy Larry (For Poll)

### Primary Prompt:
```
Stealthy orange tabby cat as secret agent spy, wearing black tuxedo and bow tie, sitting in high-tech spy chair, dark moody lighting with blue accent lights, gadgets and monitors in background, James Bond aesthetic, sophisticated mysterious expression, noir atmosphere, cinematic spy movie lighting, sleek modern setting
```

---

## BATCH GENERATION SCRIPT

### For nano-banana-pro CLI:

```bash
#!/bin/bash
# generate-larry-portraits.sh

MODEL="nano-banana-pro"
OUTPUT_DIR="./larry-portraits-2026-02-07"
mkdir -p $OUTPUT_DIR

# Style 1: Superhero
$MODEL generate \
  --prompt "Majestic orange tabby cat as a superhero, wearing red cape flowing in wind and blue suit with golden emblem on chest, flying pose above city skyline at sunset, dramatic orange and purple sky, comic book illustration style" \
  --negative "blurry, low quality, deformed, extra legs" \
  --aspect 1:1 \
  --output "$OUTPUT_DIR/larry-superhero-01.png"

# Style 2: Renaissance  
$MODEL generate \
  --prompt "Noble orange tabby cat as Renaissance royalty, wearing elaborate golden crown with jewels and deep red velvet robes, sitting regally on ornate golden throne, oil painting style in manner of Rembrandt" \
  --negative "modern clothing, cartoon, anime" \
  --aspect 3:4 \
  --output "$OUTPUT_DIR/larry-renaissance-01.png"

# Style 3: Astronaut
$MODEL generate \
  --prompt "Brave orange tabby cat as astronaut, wearing white NASA-style space suit, floating in zero gravity, Earth visible in background with stars and nebula, sci-fi illustration style" \
  --negative "atmosphere, clouds around cat, cartoon" \
  --aspect 16:9 \
  --output "$OUTPUT_DIR/larry-astronaut-01.png"

# Style 4: Wizard
$MODEL generate \
  --prompt "Wise orange tabby cat as fantasy wizard, wearing pointed wizard hat with stars, purple robe with gold trim, holding glowing magical staff, ancient mystical library background" \
  --negative "modern, sci-fi, cartoon" \
  --aspect 2:3 \
  --output "$OUTPUT_DIR/larry-wizard-01.png"

echo "All Larry portraits generated!"
```

---

## USAGE NOTES

### For Social Media:
- **Instagram Posts:** Use 1:1 or 4:5 aspect ratio
- **Instagram Stories:** Use 9:16 aspect ratio
- **TikTok:** Use 9:16 with vertical composition
- **Twitter:** Use 16:9 for timeline visibility

### Brand Consistency:
- Always include subtle "PetPix Pro" watermark
- Use consistent orange tabby coloring across all styles
- Maintain Larry's signature green eye color when visible
- Export in high resolution (minimum 1080px on shortest side)

### File Naming Convention:
```
larry-[style]-[variation]-[date]-[size].[ext]

Examples:
- larry-superhero-01-2026-02-07-1080.png
- larry-renaissance-hero-2026-02-07-1920.png
- larry-astronaut-wide-2026-02-07-4k.png
```

---

**Generated:** 2026-02-07  
**Total Styles:** 7  
**Priority Order:** Superhero, Renaissance, Astronaut, Wizard, Rockstar, Pirate, Spy
