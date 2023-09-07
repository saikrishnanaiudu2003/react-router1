// Write your JS code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="text-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
            alt="home"
          />
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}
export default Home
