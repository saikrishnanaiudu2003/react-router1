// Write your JS code here
import {Component} from 'react'

import './index.css'

class Notfound extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="text-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
            alt="not-found"
          />
          <h1>Not Founded</h1>
        </div>
      </div>
    )
  }
}
export default Notfound
