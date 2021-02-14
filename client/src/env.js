exports.env = {
  api: {
    endpoint: {
      protocol: window._env_.API_ENDPOINT_PROTOCOL || 'http',
      host: window._env_.API_ENDPOINT_HOST || 'localhost',
      port: window._env_.API_ENDPOINT_PORT || 5000,
    },
  },
}
