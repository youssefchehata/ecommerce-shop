import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const importData = async () => {
    try {
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});
        
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers.find(user => user.isAdmin);
       const sampleproducts = products.map(product => {
        return {...product, user: adminUser._id};
       });
       await Product.insertMany(sampleproducts);
        console.log('Data imported successfully!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error}`.red.inverse);
        process.exit(1);
       
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});
        console.log('Data destroyed successfully!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error destroying data: ${error}`.red.inverse);
        process.exit(1);
    }
}
const seeder = async () => {
    const action = process.argv[2];
    if (action === 'import') {
        await importData();
    } else if (action === 'destroy') {
        await destroyData();
    } else {
        console.log('Invalid action. Use "import" or "destroy"'.red.inverse);
    }
}
seeder();

// npm run data:import
// npm run data:destroy

