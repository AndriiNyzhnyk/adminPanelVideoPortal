export const parse = movieRaw => movieRaw && ({
  ...movieRaw,
  name: movieRaw.first_name,
  year: Math.floor(Math.random() * 60 + 1960),
  thumbnail: movieRaw.avatar,
  genres: movieRaw.email,
  actors: `${movieRaw.first_name} ${movieRaw.last_name}`,
});

export const serialize = movie => movie && ({
  id: movie.info.id,
  name: movie.info.name,
  siteUrl: movie.details.siteUrl,
  isActive: movie.details.isActive,
});
