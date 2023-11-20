const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const TrendingMovies = async() =>{
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}
type MovieList = {
  page: number;
  results:Array<
    {
      backdrop_path:string;
      genre_ids: number[];
      id: number;
      original_language: string,
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      name: string;
}>
}
export const GetMovies = async(query:string):Promise<MovieList["results"]>=> {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await res.json();
    return data.results;
}

export const TopRated = async() => {
    const res = await fetch(`${BASE_URL}/tv/top_rated?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const MovieDetails = async(id:string) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json();
    return data.results;
}

export const SimilarMovies = async(id:string) => {
    const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}