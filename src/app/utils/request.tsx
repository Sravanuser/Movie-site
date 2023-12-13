const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const TrendingMovies = async() =>{
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}
export const GetMovies = async(query:string) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await res.json();
    return data.results;
}

export const TopRated = async() => {
    const res = await fetch(`${BASE_URL}/tv/top_rated?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const TrendingShows = async() => {
    const res = await fetch(`${BASE_URL}/trending/tv/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const MovieDetails = async(id:string) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json();
    return data;
}

export const FindTv = async(id:string) => {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
    const data = await res.json();
    return data;
}

export const SimilarMovies = async(id:string) => {
    const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const Popular = async() => {
    const res = await fetch(`${BASE_URL}/list/8280176-latest-movies?api_key=${API_KEY}`);
    const data = await res.json();
    return data.items;
}
export const Firstpage = async() => {
    const res = await fetch(`${BASE_URL}/list/8280921-movie-list?api_key=${API_KEY}&page=1`);
    const data = await res.json();
    return data.items;
}
export const Secondpage = async() => {
    const res = await fetch(`${BASE_URL}/list/8280921-movie-list?api_key=${API_KEY}&page=2`);
    const data = await res.json();
    return data.items;
}