const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('models/user');
const APP_SECRET = 'somerandomstring';

const resolvers = {
  Query: {
    users: () => User.find(),
  },
  Mutation: {
    signup: async (_, { email, password, name }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name,
          password: hashedPassword,
          email,
        });
        // this token must be saved in the client cookies
        const token = jwt.sign({ userId: user.id, }, APP_SECRET);
  
        return {
          token,
          user,
        };
      } catch (err) {
        console.log('Error while signup: ', err);
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if ( !user ) {
          throw new Error('Email not found!');
        }
        const passwordMatched = await bcrypt.compare(password, user.password);
        if ( passwordMatched ) {
          return {
            token: jwt.sign({ userId: user.id, }, APP_SECRET),
            user,
          };
        } else {
          throw new Error('Email/Password do not match!');
        }
      } catch (err) {
        console.log('Error while logging in: ', err);
      }
    },
  }
};

module.exports = resolvers;