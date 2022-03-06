module.exports = ({ env }) => ({
    url: env("https://dashboard-artist-ravi-dhar.herokuapp.com/"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
  });