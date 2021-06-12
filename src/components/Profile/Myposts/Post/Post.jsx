import React from 'react';


const Post = (props) => {
    return (
        <>
            <div className="item">
                { props.message }
            </div>
            <div>
                <span style={{opacity: 0.5}}>22:24</span>
            </div>
            </>
    )
}


export default Post;