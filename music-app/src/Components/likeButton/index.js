import React, { useState } from 'react';

const LikeButton = () => {
    const [ liked, setLiked ] = useState(false);

    const handleLike = e => {
        e.stopPropagation()
        setLiked(!liked)
    }

    return (
        <span role="switch" onClick={handleLike} style={{ color: liked ? 'green' : 'grey' }}>★</span>
    );
}

export default LikeButton;