import bcrypt from 'bcryptjs';


const users = [
  {
    // _id: '1',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password:bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    // _id: '2',
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: bcrypt.hashSync('654321', 10),
    isAdmin: false,
  },
  {
    // _id: '3',
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;