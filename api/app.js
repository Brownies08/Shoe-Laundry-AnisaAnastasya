// api/app.js
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

console.log('ENV CHECK:', {
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_KEY ? '✅ Loaded' : '❌ Missing'
});

// Koneksi ke Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// 🔹 GET semua item (dengan optional filter status)
app.get('/api/items', async (req, res) => {
  try {
    const { status } = req.query;
    let query = supabase.from('items').select('*');
    if (status) query = query.eq('status', status);

    const { data, error } = await query;
    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 POST tambah item
app.post('/api/items', async (req, res) => {
  try {
    const { nama, jenis, status } = req.body;
    const { data, error } = await supabase
      .from('items')
      .insert([{ nama, jenis, status }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 PUT update item
app.put('/api/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, jenis, status } = req.body;

    const { data, error } = await supabase
      .from('items')
      .update({ nama, jenis, status })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 DELETE hapus item
app.delete('/api/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) throw error;
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export app biar bisa dipakai di index.js
module.exports = app;
