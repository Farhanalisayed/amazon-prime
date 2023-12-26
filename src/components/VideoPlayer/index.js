import ReactPlayer from 'react-player'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <div className="responsive-container">
      <ReactPlayer width="60%" height="60%" url={videoUrl} />
    </div>
  )
}

export default VideoPlayer
