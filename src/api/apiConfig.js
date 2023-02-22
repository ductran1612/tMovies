const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "af97cfa11e2a74fb3ed63b40b16f2e5c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
