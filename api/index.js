// api/index.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = require('./app');
const serverless = require('serverless-http');

// Cek apakah ENV terbaca
console.log('ENV CHECK:', {
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_KEY ? '✅ Loaded' : '❌ Missing'
});

// Mode lokal
if (process.env.NODE_ENV !== 'vercel') {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
}

// Mode vercel
if (process.env.NODE_ENV === 'vercel') {
  module.exports = serverless(app);
}
