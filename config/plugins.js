module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME','dvofl7mgy'),
          api_key: env('CLOUDINARY_KEY','263851665987895'),
          api_secret: env('CLOUDINARY_SECRET','RHaO5f11-AwGAilED_H2orQazOU'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });