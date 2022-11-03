import React from 'react'
import "./home.css"
import Navbar from '../../component/Navbar/Navbar'
import Header from '../../component/Header/Header'
import Featured from '../../component/Featured/Featured'
import Content from '../../component/content/conten'
import Footer from '../../component/footer/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
      </div>
      <div className="contentContainer">
        <Content />
      </div>
      <div className="">
        <Footer />
      </div>

    </div>
  )
}

export default Home
