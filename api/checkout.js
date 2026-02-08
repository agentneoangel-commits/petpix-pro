// Vercel Serverless Function - Stripe Checkout
// Endpoint: /api/checkout

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { plan, email } = req.body;

  if (!plan || !email) {
    return res.status(400).json({ error: 'Missing plan or email' });
  }

  const prices = {
    'starter': {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'PetPix Pro - Starter Pack',
          description: '10 high-res images, all 10 styles, 1080p'
        },
        unit_amount: 499 // $4.99
      },
      quantity: 1
    },
    'popular': {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'PetPix Pro - Popular Pack',
          description: '25 high-res images, all 10 styles, 4K, commercial license'
        },
        unit_amount: 999 // $9.99
      },
      quantity: 1
    }
  };

  if (!prices[plan]) {
    return res.status(400).json({ error: 'Invalid plan. Use starter or popular' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [prices[plan]],
      mode: 'payment',
      success_url: `${process.env.SITE_URL || 'https://agentneoangel-commits.github.io/petpix-pro'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL || 'https://agentneoangel-commits.github.io/petpix-pro'}/pricing`,
      customer_email: email,
      metadata: {
        plan,
        email
      }
    });

    return res.status(200).json({
      success: true,
      sessionId: session.id,
      url: session.url
    });

  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: error.message 
    });
  }
};
