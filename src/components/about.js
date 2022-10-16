import React from "react";
import about from '../img/aboutme.jpg';

function About() {
    return (
        <section>
            <img className="main-img" style={{width: "100%"}} src={about} alt="Prerana Avatar"/>
            
            <div id="about" className="body text-body">
                <h1>About Me</h1>
                <p>I am a full stack web developer and dance teacher, currently work with Haworth as a Full stack developer. My hobbies are Hiking and I am love teaching dacnce to kids.</p>
            </div>
        </section>
    );
};

export default About;