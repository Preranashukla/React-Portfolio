import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Prerana_Resume_windsor.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
		</section>
	);
}

export default Resume;
