import React from 'react';
import Project from '../Project';

function Portfolio() {
	//create an array of the projects
	const projects =[
		{
			name: 'Music Weekly',
			image: 'musicweekly.PNG',
			github: 'https://github.com/priyaaaryan/Music-Weekly',
			deployed: 'https://musicweekly.herokuapp.com/',
		},
		{
			name: 'Note Taker',
			image: 'note-taker.png',
			github: 'https://github.com/Preranashukla/weatherapp',
			deployed: 'https://preranashukla.github.io/weatherapp/',
		},
			
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
