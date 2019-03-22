const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const resolvers = {
  Query: {
    users: (root, args) => User.find(),
  },
  Mutation: {
    signup: async (root, { email, password, name }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name,
          password: hashedPassword,
          email,
        });
        // this token must be saved in the client cookies
        const token = jwt.sign({ userId: user.id, }, 'sophia_yougin');
  
        return {
          token,
          user,
        };
      } catch (err) {
        console.log('Error while signup: ', err);
      }
    }
  }
};

module.exports = resolvers;