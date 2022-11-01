import React from 'react'
import './Featured.css'
import img1 from '../../assets/image/1.jpg'
import img2 from '../../assets/image/2.jpg'
import img3 from '../../assets/image/3.jpg'
import img4 from '../../assets/image/4.jpg'
import img5 from '../../assets/image/5.jpg'
import img6 from '../../assets/image/6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://placeholder.com"  alt="" />
        <div className="featuredClassTitle">
            <h1>Live From Anywhere</h1>
            <h3>lets move out</h3>
        </div>
        <div className="grid-container">
          <div className="grid">
            <div class="grid-item">
              <img src={img1} alt="" />
            </div>
              <h3>Germany</h3>
              <p>650 properties</p>
          </div>
          <div className="grid">
            <div class="grid-item">
              <img src={img2} alt="" />
            </div>
              <h3>Turkey</h3>
              <p>750 properties</p>
          </div>
          <div className="grid">
            <div class="grid-item">
              <img src={img3} alt="" />
            </div>
              <h3>New Zealand</h3>
              <p>850 properties</p>
          </div>
          <div className="grid">
            <div class="grid-item">
              <img src={img4} alt="" />
            </div>
              <h3>Nature</h3>
              <p>650 properties</p>
          </div>
          <div className="grid">
            <div class="grid-item">
              <img src={img5} alt="" />
            </div>
              <h3>Nature</h3>
              <p>650 properties</p>
          </div>
          <div className="grid">
            <div class="grid-item">
              <img src={img6} alt="" />
            </div>
              <h3>Nature</h3>
              <p>650 properties</p>
          </div>
        </div>
      <button><FontAwesomeIcon icon="fa-solid fa-spinner" /> Load More</button>
      </div>
    </div>
  )
}

export default Featured
