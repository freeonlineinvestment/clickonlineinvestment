import React from 'react';
import './Home.css';
import Slideshow from './Slideshow';





const Home =()=>{
	return(
		<div className='Home'>
			<Slideshow/>
		
			<div className="home-msg tracked-mega">
				<h1 className="washed-red">CLICK ONLINE INVESTMENT</h1>
				<h3>Smart investment the name of trust</h3>
             
            </div>	
		</div>
	);
}
export default Home;
