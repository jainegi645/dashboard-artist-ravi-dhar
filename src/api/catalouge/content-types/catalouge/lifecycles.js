module.exports = {
  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
    strapi.services.ioServer.emit('socket io emitted result', result)
  },
};
