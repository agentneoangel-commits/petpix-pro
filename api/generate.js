// Vercel Serverless Function - Generate Pet Portrait
// Endpoint: /api/generate

const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { imageUrl, style, email } = req.body;

  if (!imageUrl || !style || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields: imageUrl, style, email' 
    });
  }

  const validStyles = [
    'superhero', 'beach', 'cozy', 'camping', 'royal', 
    'astronaut', 'detective', 'graduation', 'spa-day', 'shake-off'
  ];

  if (!validStyles.includes(style)) {
    return res.status(400).json({ 
      error: `Invalid style. Must be one of: ${validStyles.join(', ')}` 
    });
  }

  try {
    // Download image and generate using nano-banana-pro
    const prompt = generatePrompt(style);
    
    // Queue the generation job
    const jobId = await queueGenerationJob(imageUrl, style, email, prompt);
    
    return res.status(200).json({
      success: true,
      jobId,
      message: 'Generation job queued. You will receive an email when complete.',
      estimatedTime: '30-60 seconds'
    });

  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({ 
      error: 'Failed to queue generation job',
      details: error.message 
    });
  }
};

function generatePrompt(style) {
  const prompts = {
    'superhero': 'as a superhero with cape, standing heroically on a city rooftop at sunset, comic book style, vibrant colors, dynamic pose',
    'beach': 'at the beach wearing sunglasses and Hawaiian shirt, surfing on a wave, tropical sunset, fun vacation vibes',
    'cozy': 'curled up in warm blankets with fairy lights, rainy day by the window, cozy atmosphere, soft lighting',
    'camping': 'camping in the wilderness, roasting marshmallows over campfire, night sky with stars, wearing flannel',
    'royal': 'as a king on a golden throne, wearing crown and royal robe, palace background, regal portrait',
    'astronaut': 'in a NASA spacesuit, floating in space with Earth in background, stars and planets, cinematic sci-fi',
    'detective': 'as a noir detective, wearing trench coat and fedora, black and white film style, mysterious foggy street',
    'graduation': 'wearing graduation cap and gown, holding diploma, celebration pose, university background',
    'spa-day': 'at a luxury spa, wearing robe and cucumber slices, relaxation pose, pampering session',
    'shake-off': 'shaking off water, action shot, dynamic motion, water droplets frozen in time'
  };
  
  return prompts[style] || prompts['superhero'];
}

async function queueGenerationJob(imageUrl, style, email, prompt) {
  // Generate unique job ID
  const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Store job in memory (use Redis in production)
  const job = {
    id: jobId,
    imageUrl,
    style,
    email,
    prompt,
    status: 'queued',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // In production, this would queue to a job processor
  // For now, we'll process synchronously
  global.jobQueue = global.jobQueue || {};
  global.jobQueue[jobId] = job;
  
  return jobId;
}
