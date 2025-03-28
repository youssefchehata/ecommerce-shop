import express from 'express';
const router = express.Router();
// import Product from '../models/productModel.js';
// import asyncHandler from '../middleware/asyncHandler.js';
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  createProductReview,
  getTopProducts
  
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top',getTopProducts);
router.route('/:id').get(getProductById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview);


export default router;
