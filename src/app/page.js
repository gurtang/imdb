import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const address = `https://api.themoviedb.org/3/movie/${
    genre === "fetchTopRated" ? "top_rated" : "popular"
  }?api_key=${API_KEY}&language=en-US&page=1`;
  const res = await fetch(address, { next: { revalidate: 10000 } });
  const data = await res.json();
  const results = data.results;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
