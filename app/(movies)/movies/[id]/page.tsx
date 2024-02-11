import { API_URL } from "../../../(home)/page";

async function getMovie(id:string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    const movie = await getMovie(id);
    return <h1>{movie.title}</h1>;
}