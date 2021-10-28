module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};
