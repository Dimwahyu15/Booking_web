import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='header'> 
      <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon="fa-solid fa-bed" />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-plane" />
            <span>Flight</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-car" />
            <span>Car Rental</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-bed" />
            <span>Attraction</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-taxi" />
            <span>Airport Taxi</span>
            </div>
          </div>
          <h1 className="headerTitle">Lagi Pusing? Hiling aja dengan booking tempat di <span>Raun.com</span></h1>
          <p className="headerDesc">Sudah akhir tahun, mari jalan- jalan gunakan promo menarik dari masDim :)</p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-calendar" className="headerIcon" />
                <input 
                type="text" 
                placeholder='mau kemana'
                className="headerSearchInput" 
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-calendar" className="headerIcon" />
                <span className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to 
                ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-person" className="headerIcon" />
                <span className="headerSearchText">2 adults 2 children 1 room</span>
            </div>
            <div className="headerSearchItem">
                <button className="headersearchBtn">Search</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
