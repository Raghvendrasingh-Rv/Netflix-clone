import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests'
import axios from './axios'

function Banner() {
const [movie , setMovie] = useState([])


useEffect(()=>{
    async function fetchData() {
        const response = await axios.get(requests.fetchNetflixOriginals)
        
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        return response
    }

    fetchData()
},[])

function trucateDesc(str ,n){
    return str?.length > n ? str.substr(0,n-9)+"...": str
}
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.original_name||movie?.title}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{trucateDesc(movie?.overview, 150)}</h1>
            </div>
            <div className="banner_fadebottom"></div>
        </header>
    )
}

export default Banner
