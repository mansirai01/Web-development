import React from 'react';
import './Footer.css'
import logo from '../images/your-logo.png'

const Footer = () => {
	return(
		<div className="footer">
			<img src={logo} alt="Logo" className="footer-logo"/>
			// <h3> Join the hustle! </h3>
			<div className="socials">
				
				<a href="https://www.facebook.com"><i className="fab fa-facebook-f animate__animated animate__fadeIn myanimfb"></i></a>
				<a href="https://www.instagram.com"><i className="fab fa-instagram animate__animated animate__fadeIn myanimig"></i></a>
				<a href="https://www.twitter.com"><i className="fab fa-twitter animate__animated animate__fadeIn myanimtw"></i></a>
				<a href="https://www.linkedin.com"><i className="fab fa-linkedin-in animate__animated animate__fadeIn myanimin"></i></a>
				<a href="https://www.pinterest.com"><i className="fab fa-pinterest-p animate__animated animate__fadeIn myanimpt"></i></a>
			</div>
		</div>
	)
}

export default Footer;
