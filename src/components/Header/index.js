// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="images-container">
          <div className="image-flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
              className="image-logo"
            />
            <p className="para">Wave</p>
          </div>
          <div className="image-flex">
            <Link className="para" to="/">
              Home
            </Link>
            <Link className="para" to="/about">
              About
            </Link>
            <Link className="para" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
