module.exports = {
  paths: {
    public: 'public',
    watched: ['static']
  },

  conventions: {
    ignored: [
      /[\\/]_/,
      /\.test\.js/
    ]
  },

  modules: {
    nameCleaner: (path) => path.replace(/^static\/js/, 'ttb')
  },

  files: {
    javascripts: {
      joinTo: {
        'app.js': /^static[\\/]js/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      precompile: true,
      joinTo: 'app.js'
    }
  },

  plugins: {
    babel: {presets: ['es2015']}
  }
};
