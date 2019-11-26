const user = {
  path: '/user',
  delay: 2000,
  template: {
    name: 'testuser'
  }
};

const config = {
  path: '/config',
  delay: 2000,
  template: {
    apiurl: 'http://localhost:3001'
  }
};

const rand = {
  cache: false,
  path: '/rand',
  delay: 1000,
  template: { val: () => Math.random().toString(36).substring(7) }
};

module.exports = { user, config, rand }
