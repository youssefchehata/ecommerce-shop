import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product._id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});