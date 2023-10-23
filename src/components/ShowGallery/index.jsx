//1. Retrieve the shows data from the API (fetch request)
//2. Once we've retrieved shows, we want to store them in a state
//3. Once we've stored them, we can map through the shows and we can render a card/div for each show in the array
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import GalleryImage from "../GalleryImage";

export default function ShowGallery() {
    let url = "https://api.tvmaze.com/shows"
    const [shows, setShows] = useState([]);

    useEffect(() => {
        //FETCH REQUEST
        async function displayShows() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                //console.log(data) to check first, if it works store in a state
                //populate the state with the data 
                setShows(data);
            } catch (err){
                console.log(err)
            }
        };
        displayShows();
    }, [])
    return (
        <div className="shows">
            {shows.map(show => <Link to={`${show.id}`} key={show.id}><GalleryImage show={show}/></Link>)}
        </div>
    )
}