// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="the-cont">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="main">
        <h1>Action Movies</h1>
        <MoviesSlider theList={actionMovies} />
        <h1>Comedy Movies</h1>
        <MoviesSlider theList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
