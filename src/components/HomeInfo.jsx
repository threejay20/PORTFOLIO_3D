import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center"> {text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Justin </span>  👋
            <br/> 
            A highly skilled leader with a knack for achieving goals and inspiring teams, I also happen to be a full stack developer. With a diverse background and a passion for both leadership and technology, I bring a unique perspective to every project. Let's embark on a journey of collaboration and success together!
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with different companines and picked up many different skills along the way" 
            link="/about"
            btnText="Learn more"/>
    ),
    3: (
        <InfoBox
            text="Led and created multiple projects to suceess over my career. Curious about some of them?" 
            link="/projects"
            btnText="Visit my portfolio"/>
    ),
    4: (
        <InfoBox
            text="Need a Leader or looking for a developer? I'm just a few keystrokes away" 
            link="/contact"
            btnText="Let's talk"/>
    )
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
   
  
}

export default HomeInfo
