import React from 'react'
import InstagramIcon from '../assets/SocialMedia/instagram.png'
import FacebookIcon from '../assets/SocialMedia/facebook.png'
import logo from '../assets/logo.png'



const Footer = () => {
  return (
    <section id='getintouch' className='footer'>
      <div className='row d-flex align-items-center'>
        <div className='col-md-8'>
          <h2 className='footer-title'>Let's Talk</h2>
        </div>
        <div className='col-md-4 d-flex flex-column gap-2'>
          <div className='d-flex flex-wrap gap-3 align-items-center justify-content-between'>
            <div className="footer-cover">
              <span style={{ fontSize: "24px" }}>@</span>
              sales@pixelworld.ae
            </div>
            <div className='d-flex gap-3'>
            <img src={InstagramIcon} alt='instagram' width={34} height={34} />
            <img src={FacebookIcon} alt='instagram' width={34} height={34} />
          </div>
          </div>
          <div className='footer-cover d-flex justify-content-between'>
            <input type='text' className='footer-input' placeholder='let us know about your magic' />
            <button className='footer-btn'>Reach Out</button>
          </div>
        </div>
      </div>

      <h6 className='footer-text mb-4'>Let’s craft a unique experience together. Get in touch today to start your journey with Us</h6>

      <div className='footer-bottom'>
        <div className='footer-logo'>
          <img src={logo} alt='pixel-panda-logo' width={24.74} height={15.48}  />Pixel Panda
        </div>
        <div className='footer-copyright'>
          © 2024 Pixel Panda. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Footer