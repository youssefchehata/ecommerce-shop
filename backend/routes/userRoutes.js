import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUserById,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile   )
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .get   (protect, admin, getUserById   )
  .put   (protect, admin, updateUserById)
  .delete(protect, admin, deleteUser    );

export default router;
