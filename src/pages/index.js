import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'

class HomePage extends Component {
  render() {
    return (
        <Layout>
          <div className='wrapper flex column'>
            <Sidebar pageTitle={<p className='index-name'>Stephy X</p>}/>
            <div className="main">
              <div id="top">
              </div>
              <div id="about">
              <p className="title">Front-End Developer</p>
                <br></br>
              <br></br>
              <p>An ambitious Front-End Web Developer bringing a broad skill range in both website design and
                development.</p>
                <img alt="a drawing of me" className="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4"></img>
              </div>
            </div>
          </div>
        </Layout>
    )
  }
}
export default HomePage;

