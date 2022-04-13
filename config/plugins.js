module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME','damaczg5v'),
          api_key: env('CLOUDINARY_KEY','329985189747586'),
          api_secret: env('CLOUDINARY_SECRET','4SkMntAGaN9CeKMnNKk7X5S9cY4'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });