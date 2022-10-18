import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/aboutme.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer have 6 years of exprencess with PHP. 
					I have decided to extended my skill in web development. I have recently started a new position at Haworth assets
		 			full stack web developer working Angular project and AEM frame work for another project.
				</p>
				
			</div>
		</section>
	);
}

export default About;
