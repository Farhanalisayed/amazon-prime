import Popup from 'reactjs-popup'
import VideoPlayer from '../VideoPlayer'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {id, thumbnailUrl, videoUrl} = details
  return (
    <li className="popup-container">
      <Popup
        modal
        trigger={<img className="img" src={thumbnailUrl} alt="thumbnail" />}
      >
        {close => (
          <div className="popup-content">
            <IoMdClose className="icon" onClick={() => close()} />
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        )}
      </Popup>
    </li>
  )
}
export default MovieItem
