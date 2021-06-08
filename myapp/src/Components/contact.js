import React from 'react';
import axios from 'axios';
import './contact.css'

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <section id="contact" className="container parallax5" >
		<div className="inner contact">

			<h1 className="header semibold white">Get In <span className="extrabold">Touch</span></h1>

			<h4 className="h-desc white contact-text">Feel free to contact us in case of any queries </h4>

			<div className ="contact-form">

				<form id="contact-us" method="POST" action="subs.php">
	
					<div className="col-xs-6 animate__animated animate__fadeInLeft visible" >
	
						<input type="text" name="name" id="name" required="required" className="form light" placeholder="Name" />
		
						<input type="email" name="mail" id="mail" required="required" className="form light" placeholder="Email" />
		
						<input type="text" name="subject" id="subject" required="required" className="form light" placeholder="Subject" />
					</div>
		
					<div className="col-xs-6 animate__animated animate__fadeInRight visible" >
		
						<textarea name="message" id="message" className="form textarea light" placeholder="Message"></textarea>
					</div>
					
					<div className="relative fullwidth col-xs-12">
					
						<button type="submit" id="submit" name="submit" className="form-btn light">Send Message</button> 
					</div>
					
					<div className="clear"></div>
				</form>

	
				<div className="mail-message-area">
				
					<div className="alert gray-bg mail-message not-visible-message">
						<strong>Thank You !</strong> Your email has been delivered.
					</div>
				</div>

			</div>
		</div>
	</section>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;