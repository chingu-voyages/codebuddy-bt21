const dummyUsers = [
  {
    name: 'Dane David',
    email: 'dndavid102@gmail.com',
    password: 'test1234',
    interests: ['react', 'javascript', 'graphql'],
  },
  {
    name: 'Deyl Energy',
    email: 'soulvisman@gmail.com',
    password: 'test4567',
    interests: ['react', 'html', 'javascript', 'mongodb'],
  },
  {
    name: 'Rajeshwar Reddy',
    email: 'rajeshwarreddy.kadari@gmail.com',
    password: 'test8910',
    interests: ['mongodb', 'javascript', 'react'],
  },
];

const resolvers = {
  Query: {
    users: (root, args) => dummyUsers,
  },
  User: {
    name: ({ name }) => name,
  },
};

module.exports = resolvers;