import React from 'react';
import './Beginers.css'
import img from './pics/1.jpg';
import ClientSlide from './ClientSlide';
const Beginers =()=>{
	return(
		<div className='BeginersMain'>
			<img className="image-Beginers" alt="imageAlting" src={ img } />
			<div className='pkg-Beginers tc'>
				<h6 className='heading-Beginers tracked-mega tc'>BEGINERS</h6>
				<p>Click investment Ak official website Hy Aur hamare team 24 hours is site per kam kar rahi hai.<br/>Humne Apne investors ko Made Nazar rakhte hue.</p>
			
			</div>
			<ClientSlide />
		</div>
		);
}
export default Beginers;