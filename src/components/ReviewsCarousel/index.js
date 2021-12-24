import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  rightArrow = () => {
    let {count} = this.state
    // console.log(`right arrow clicked Count value ${count}`)
    if (count < 3) {
      count += 1
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  leftarrow = () => {
    let {count} = this.state
    //  console.log(`left arrow clicked Count value ${count}`)
    if (count > 0) {
      count -= 1
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const eachItem = reviewsList[count]
    // console.log(count)
    // console.log(eachItem)
    return (
      <div className="MainPAge">
        <h1>Reviews</h1>
        <div className="ReviewList">
          <button type="submit" onClick={this.leftarrow} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <ul>
            <li key={eachItem.username} className="listclass">
              <img
                src={eachItem.imgUrl}
                alt={eachItem.username}
                className="userimage"
              />
              <p>{eachItem.username}</p>
              <p className="company">{eachItem.companyName}</p>
              <p className="company">{eachItem.description}</p>
            </li>
          </ul>
          <button type="submit" onClick={this.rightArrow} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
