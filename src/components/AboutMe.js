import React from 'react';
import Image from '../atoms/Image';
import profileImg from '../images/ProfileIcon.jpg';

function AboutMe() {
    return (
        <div>
            <div id="developerPhotoEl">
                <Image image={profileImg}/>
            </div>
            <div id="aboutMeText">
                <h3>Just a little about me!</h3>
                <p>I'm an east coast born, west coast based professional embarking on a career shift into tech and web development. After graduating from Carnegie Mellon University with my bachelors in civil engineering, I pursued a career in the field of nuclear engineering. After a few years and a few qualifications later, I realized it wasn't quite for me so I transitioned into working with our new engineers and managing the day-to-day of our engineering recruiting program and never really looked back. Until now... tHough I love what I do, I've missed the more technical aspects of engineering and problem solving and, long story short, I found myself on this journey to becoming a full stack web developer.If you want to follow my journey and see how far I progress, be sure to favorite my portfolio and check back in for updates!</p>
            </div>
        </div>
    );
}

export default AboutMe;