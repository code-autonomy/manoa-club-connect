module.exports = {
  servers: {
    one: {
      host: 'manoa-club-connect.xyz',
      username: 'root',
      password: 'v_A?4-sYeV^-eZu'
    }
  },
  app: {
    // if you edit the app 'name' field, be sure to run 'mup stop' if the app is already running.
    // otherwise you will have two apps deployed at once, with unpredictable results.
    name: 'Manoa-Club-Connect',
    path: '../',
    servers: { one: {}, },
    buildOptions: { serverOnly: true },
    env: {
      ROOT_URL: 'https://manoa-club-connect.xyz',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },
    docker: { image: 'zodern/meteor:latest' },
    enableUploadProgressBar: true
  },
  mongo: { version: '5.0', servers: { one: {} }
  },
  proxy: {
    domains: 'manoa-club-connect.xyz',
    ssl: {
      letsEncryptEmail: 'jhasun@hawaii.edu',
      forceSSL: true
    },
  },
};
