const user = {
  path: '/user',
  delay: 2000,
  template: {
    name: 'testuser'
  }
};

const categories = {
  path: '/categories',
  delay: 1000,
  template: () => ['Food', 'Electronic', 'Medicals']
}

const countries = {
  path: '/countries',
  delay: 3000,
  template: () =>  ['Poland', 'Germany', 'Russia']
}

const config = {
  path: '/config',
  delay: 1000,
  status: (req, res, next) => {
    res.status(500);
    next();
  },
  template: {
    apiurl: 'http://localhost:5000'
  }
};

const rand = {
  cache: false,
  path: '/rand',
  delay: 5000,
  template: { val: () => Math.random().toString(36).substring(7)}
};

module.exports = { user, config, rand, categories, countries}
