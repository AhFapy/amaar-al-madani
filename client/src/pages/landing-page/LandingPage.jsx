import React, { useEffect } from 'react'
import "./landing-page-styles.css"
import DefaultButton from '../../components/DefaultButton'
import bronzeImg from "../../assets/plan-imgs/bronze.jpg"
import silverImg from "../../assets/plan-imgs/silver.jpg"
import goldImg from "../../assets/plan-imgs/gold.jpg"
import LandingImg from "../../assets/landingimg.png"
import {motion} from "framer-motion"
import { Tilt } from 'react-tilt'
import { importAllImages } from '../../utils';
import image1 from "../../assets/plan-imgs/a.jpg"
import image2 from "../../assets/plan-imgs/b.jpg"
import image3 from "../../assets/plan-imgs/c.jpg"
import image4 from "../../assets/plan-imgs/d.jpg"
import image5 from "../../assets/plan-imgs/e.jpg"
import image6 from "../../assets/plan-imgs/f.jpg"
import image7 from "../../assets/plan-imgs/g.jpg"
import image8 from "../../assets/plan-imgs/h.jpg"
import callsImg from "../../assets/plan-imgs/calls.jpg"
import gameplanImg from "../../assets/plan-imgs/gameplan.jpg"
import dailyCommunicationImg from "../../assets/plan-imgs/daily-communication.jpg"
import foot1 from "../../assets/plan-imgs/foot-1.jpg"
import foot2 from "../../assets/plan-imgs/foot-2.jpg"
import foot3 from "../../assets/plan-imgs/foot-3.jpg"
import foot4 from "../../assets/plan-imgs/foot-4.jpg"
import footVideo from "../../assets/plan-imgs/foot-ivd.mp4"
import footLion from "../../assets/plan-imgs/foot-lion.jpg"
import playIcon from "../../assets/plan-imgs/play-icon.png"
import goldContract from "../../assets/plan-imgs/gold-contract.jpg"
import fullAccess from "../../assets/plan-imgs/full-access.jpg"
import navLogo from "../../assets/nav-logo.jpg"


function LandingPage() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const scrollDown = () => {
    window.scrollTo({
      top: "650",
      behavior: 'smooth', 
    });
  };

  const redirectToBronze = function() {
    window.location.href = "https://pool-stop-378.notion.site/Leo-s-Lion-Teamspace-e97e36de437547a3b2c0421992fb12df?pvs=4"
  }

  const redirectToPlan = function(route) {
    window.location.href = `/${route}-plan`
  }

  const redirectToCourse = function() {
    window.location.href = "/courses"
  }

  const bronzeData = ["Access To Leo's Personal Tools, Templates & Checklists", "Access To Private Routine", "Leo's Self Improvement Habit Guides (Meditation, Visualization, Stretching...)"];
  const silverData = ["Access To ALL 8 OF LEO'S HIGH LEVEL COURSES:", "- Hunters Habits Course (50eur) ","- Mens Life Mastery Course (25eur) ","- Up Your Health Up Your Wealth Course (75eur) ","-Kings Social Skills Course (50$) ","-Unleash Your Killer Instinct Course (25$) ","- Learn To Lead The Pack Course (25$) ","-Full LooksMaxxing Course (50eur/$) ","- Hack The School System Course (75$)", "375 eur for 129? That's A Deal"];
  const goldData = ["Access To ALL 8 Courses (Silver Pack)", "Daily Texting And Communication (Whatsapp)", "Full Daily, Weekly & Monthly Personalized Step By Step Gameplan To Ensure Goal Achievement", "1h Onboarding & Planning Coaching Call, Checkup & Coaching Call Every Other Week"];

  
  return (
    <>
    <div className='lp-wrapper'>
      <nav>
        <div className='nav-left'>
          <img className='nav-img' src={navLogo}></img>
        </div>

        <div className='nav-right'>
        </div>

      </nav>
      <div className='lp-header'>
          <span className='header-text'>Islam from <span className='header-text blue-shadow'>ﺍ</span> to <span className='header-text blue-shadow'>ي</span></span>
          <span className='under-header-text'>Our Learning Program will Guide You on Every Step of the Way, no matter where you start.</span>
      </div>
      
      <div className='under-header'>
      <span className='blue-shadow'>(Scroll Down If You're Serious On Your Deen).</span>
        <div className='scroll-down' onClick={scrollDown}>
            <motion.dev 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="motion-dev"
            />
        </div>
      </div>
    </div>

    <div className='first-cta-wrapper'>
      <span className='header-text'>Select Your Tier</span>
      <div className='img-wrapper'>
      <div className='img-div'>
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img bronze-img' onClick={() => redirectToPlan("bronze")} src={bronzeImg}/>
      </Tilt>
      <span className='advantages-span'>Tier 1</span>
        {bronzeData.map(info => <span className='bronze-text bronze-span'>{info}<br/></span>)}
        <button className='plan-btn bronze-btn' onClick={() => redirectToPlan("bronze")}>See Plan</button>
      </div>
      <div className='img-div'>
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img silver-img' onClick={() => redirectToPlan("silver")} src={silverImg}/>
      </Tilt>
      <span className='advantages-span silver-text'>Silver</span>
      <span className='advantages-span silver-text'>Unlock All These Courses</span>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image1}></img>
      <img className='plan-img' src={image2}></img>
      <img className='plan-img' src={image3}></img>
      </div>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image4}></img>
      <img className='plan-img' src={image5}></img>
      <img className='plan-img' src={image6}></img>
      </div>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image7}></img>
      <img className='plan-img' src={image8}></img>
      </div>
      <div className='silver-prices'>
          <span><span className='silver-prices-span'><b>99x4 + 49x4 = </b></span><span className='silver-prices-subtext'>592€</span></span><br/><br/>
        </div>
      <span className='under-header-text silver-price-span'>FOR ONLY A 1 TIME FEE OF 129€!</span>

        <button className='plan-btn silver-btn' onClick={() => redirectToPlan("silver")}>See Plan</button>
      </div>
      <div className='img-div' >
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img gold-img' onClick={() => redirectToPlan("gold")} src={goldImg}/>
      </Tilt>
      <span className='advantages-span gold-text'><b>LEO'S LIONS COACHING</b></span>
      <span className='advantages-span gold-text'>Gold</span>
        <div className='gold-showcase-div'>
          <img className='gold-plan-img' src={callsImg}></img>
          <span className='showcase-text'>1-1 Coaching Calls</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <img className='gold-plan-img' src={dailyCommunicationImg}></img>
          <span className='showcase-text'>Daily Communication</span>
        </div>
        <div className='gold-showcase-div '>
        <img className='gold-plan-img' src={gameplanImg}></img>
          <span className='showcase-text'>Personalised Gameplan</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <img className='gold-plan-img' src={goldContract}></img>
          <span className='showcase-text'>90 Day Contract</span>
        </div>
        <div className='gold-showcase-div '>
        <img className='gold-plan-img' src={fullAccess}></img>
          <span className='showcase-text'>Full Access To Bronze <br/> and Silver Plans</span>
        </div>
        <div className='gold-prices'>
          <span className='gold-prices-span'><b>1-1 Coaching Calls</b></span> <br/><span className='gold-prices-subtext'>Each one is normally 30$, you get one every other week. ($60/mo)</span><br/><br/>
          <span className='gold-prices-span'><b>Daily Chat Coaching</b></span> <br/><span className='gold-prices-subtext'>So powerful you wont't even need calls because of it ($99/mo)</span><br/><br/>
          <span className='gold-prices-span'><b>Personalized Goal-Oriented Day-by-Day Monthly Gameplan</b></span> <br/><span className='gold-prices-subtext'>Just follow it and see the results ($30/mo)</span><br/><br/>
          <span><span className='gold-prices-end-span-no-bright'>$189 (gold) + $592 (silver included in gold) = </span><span className='gold-prices-end-span'>$774 FOR 299/mo!</span></span>
        </div>

      </div>
        <button className='plan-btn gold-btn' onClick={() => redirectToPlan("gold")}>See Plan</button>
      </div>
      
  <div className='foot-content-div'>
    <img className='foot-img' src={foot1}></img>
    <span className='foot-span'>DON'T JOIN <br/> & <br/> <span className='foot-span red'>DON'T IMPROVE</span></span>
    <img className='foot-img-2' src={foot2}></img>
  </div>
  <div className='foot-content-div'>
    <img className='foot-img-3' src={foot3}></img>
    <span className='foot-span-2'>LIVE AN AVERAGE LIFE <br/> & <br/> <span className='foot-span-2 red'>LOSE YOUR FREEDOM</span></span>
    <img className='foot-img-4' src={foot4}></img>
  </div>
  <div className='foot-content-div column'>
  <video className='foot-vid' controls src={footVideo}></video>

  <span className='foot-span-2'> <br/><span className='foot-span-2-gold OR-span'>OR</span> <br/><br/><br/><span className='join-me-size'>JOIN ME</span> <br/> & <br/> <span className='foot-span-2-gold'><span className='join-me-size'>NEVER</span><br/><br/> BE THE SAME AGAIN</span></span>
  <img className='lion-img' src={footLion}></img>
  <span className='refund-span'>100% FULL REFUND if you don't achieve your trimestral Goals & Not Happy with the Product (I know it won't happen that's why I'm betting on it)</span><br/><br/>
  <span className='vid-span'>My Purpose:</span>
  <span className='vid-span-white'>TO GUIDE YOUNG MEN INTO THE PATH<br/>I'M GOING THROUGH, TO ADD <br/> SUCCESSFUL BROTHERS INTO MY TRIBE</span>
  </div>


      <button style={{backgroundColor: "white"}} onClick={() => redirectToCourse()}>course</button> 
      <div style={{ minWidth: '320px', height: '700px' }}>
      <div className="calendly-inline-widget"
      data-url="https://calendly.com/leo-matiano/coaching-fit-call"
      style={{ minWidth: '320px', height: '700px' }}
    />
    </div>
    </div>

   </>
  )
}

export default LandingPage