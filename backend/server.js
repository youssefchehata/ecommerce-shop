import express from 'express';
import dotenv from 'dotenv';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
dotenv.config();
import connectDB from './config/db.js';
connectDB();
// import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5000;
const app = express();





app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
