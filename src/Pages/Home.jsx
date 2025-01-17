import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Link} from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../Styles/HomeStyle.css'
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>ThapaCooks</h1>
            <h2>EAT ME HARD</h2>
            <Link to="/menu">
            <button sx={{}}>
              ORDER NOW
            </button>
            </Link>
            
          </div>
        </div>
    </Layout>
  )
}

export default Home