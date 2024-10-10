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

router.route('/').post (registerUser).get(getUsers) ;
router.post ('/logout' , logoutUser ) ;
router.post ('/login' , authUser ) ;
router.route('/profile').get(getUserProfile ).put(updateUserProfile) ;
router.route('/:id' ).get(getUserById ).put(updateUserById).delete(deleteUser);

export default router;
