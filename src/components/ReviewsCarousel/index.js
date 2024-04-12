import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {profileIndex: 0}

  onPriviousProfile = () => {
    const {profileIndex} = this.state
    if (profileIndex > 0) {
      this.setState(prevState => ({profileIndex: prevState.profileIndex - 1}))
    }
  }

  onNextProfile = () => {
    const {profileIndex} = this.state
    const {reviewsList} = this.props
    const len = reviewsList.length
    if (profileIndex < len - 1) {
      this.setState(prevState => ({profileIndex: prevState.profileIndex + 1}))
    } else {
      this.setState(prevState => ({profileIndex: prevState.profileIndex}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {profileIndex} = this.state
    const profile = reviewsList[profileIndex]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="profile-container">
          <button
            data-testid="leftArrow"
            className="arrow-btn"
            type="button"
            onClick={this.onPriviousProfile}
          >
            <img
              className="arrow"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            />
          </button>
          <div className="profile">
            <img
              alt={profile.username}
              className="profilePic"
              src={profile.imgUrl}
            />
            <p className="name">{profile.username}</p>
            <p className="company">{profile.companyName}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="arrow-btn"
            type="button"
            onClick={this.onNextProfile}
          >
            <img
              className="arrow"
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            />
          </button>
        </div>
        <p className="about">{profile.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
