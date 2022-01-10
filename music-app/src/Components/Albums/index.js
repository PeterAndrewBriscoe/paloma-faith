import React, { useState } from 'react';
import LikeButton from "../likeButton";


const FeaturedAlbum = ({albumYear,handleLyrics}) => {
    const [albumsData,setAlbumsData] = useState([
        {year:2020, songlist: ["Supernatural", "Monster"]},
        {year:2014, songlist: ["Only Love Can Hurt Like This", "Love Only Leaves You Lonely"]}
    ])
        let album = albumsData.filter(albumsData => albumsData.year == albumYear)
        let songlist = albumsData[0].songlist
        
    return(
        <div id='feature'>
            <ul>
                {
                    songlist.map(
                        song => (
                            <li key={song} onClick={()=> handleLyrics(song)}><LikeButton />{song}</li>
                        )
                    )
                }
            </ul>
        </div>
    )
}
export default FeaturedAlbum

