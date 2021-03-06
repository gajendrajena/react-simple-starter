import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });

  return (
    <div className="col-md-4 col-lg-4">
      <ul className="col-md-12 list-group">
        {videoItems}
      </ul>
    </div>
  );
}
export default VideoList;
