import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  }, { timestamps: true });

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    };
  const User = mongoose.model('User', userSchema);
  
  export default User;
