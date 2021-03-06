import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'
import ContactForm from '../components/contact-form'

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
            <Sidebar pageTitle={'Contact'}/>
            <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main">
          <h1 class="contact-title dark">Get in touch!</h1>
          <div id="about">
            <ContactForm/>
            {/*<form action="../components/contact.php" className="contact-form-all flex column" method="post">*/}
              {/*<div className="contact-form flex">*/}
                {/*<div className="left flex column">*/}
                  {/*<span className="contact-label contact-label-name">Name</span>*/}
                  {/*<input type="text" name="contact-name" className="contact-name" placeholder="Enter your name"></input>*/}
                  {/*<span className="contact-label contact-label-email">Email</span>*/}
                  {/*<input type="text" name="contact-email" className="contact-email" placeholder="Enter your email"></input>*/}
                {/*</div>*/}
                {/*<div className="right flex column">*/}
                  {/*<span className="contact-label contact-label-message">Message</span>*/}
                  {/*<textarea name="contact-email" className="contact-message" placeholder="Enter your message"></textarea>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<input type="submit" name="contact-submit" value="Submit" className="contact-submit"></input>*/}
          {/*</form>*/}
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage;

