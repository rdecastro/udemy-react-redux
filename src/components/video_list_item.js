import React from 'react'; 

const VideoListItem = ({video}) => {
    console.log(video);
    return (
        <li>Video {video.snippet.title}</li>
    );
};

export default VideoListItem;