import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const LikeButton = () => {
    const [likeColor, setLikeColor] = useState(" ")
    const [randomUser, setRandomUser] = useState({})
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setRandomUser(data.results[0]))
    }, [])
    const handleLike = () => {
        const color = likeColor ? '' : "primary"
        setLikeColor(color)
    }
    return (
        <div>
            <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
            <div>
                <h2>{randomUser.gender}</h2>
                {/* <h1>Name: {randomUser.name?.first}</h1> */}
                <h1>Name: {randomUser.name && randomUser.name.first}</h1>
            </div>
        </div>
    );
};

export default LikeButton;