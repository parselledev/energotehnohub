const withImages = require('next-images');
// const withVideos = require('next-videos')

// module.exports = withVideos()

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
  webpack(config, options) {
    return config;
  },
});
