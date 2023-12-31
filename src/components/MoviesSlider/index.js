import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {theList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <ul>
          {theList.map(each => (
            <MovieItem details={each} key={each.id} />
          ))}
        </ul>
      </Slider>
    </div>
  )
}
export default MoviesSlider
