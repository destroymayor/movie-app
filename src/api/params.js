const getFullYear = new Date().getFullYear();

export const getPopularParams = `sort_by=popularity.desc`;
export const getTopRatedParams = `certification_country=US&certification=R&sort_by=vote_average.desc`;
export const getBestMovieOfTheYearParams = `primary_release_year=${getFullYear}&sort_by=vote_average.desc`;
