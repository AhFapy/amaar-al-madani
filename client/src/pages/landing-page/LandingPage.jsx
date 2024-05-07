import React, { useEffect } from 'react'
import "./landing-page-styles.css"
import {motion} from "framer-motion"
import { Tilt } from 'react-tilt'
import callsImg from "../../assets/plan-imgs/calls.jpg"
import calls from "../../assets/plan-imgs/calls.png"
import arab from "../../assets/plan-imgs/arab.png"
import tajweed from "../../assets/plan-imgs/tajweed.png"
import islamcourse from "../../assets/plan-imgs/islamcourse.jpg"
import allDay from "../../assets/plan-imgs/24-7.png"
import navLogo from "../../assets/nav-logo.jpg"
import {fadeIn} from "../../utils/motion"


function LandingPage() {

  const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };


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
      <div className='img-div' >
      <span className='advantages-span'>Tier 1</span>
        <div className='gold-showcase-div'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={callsImg}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Professional Quran lessons by knowledgeable Teachers</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={tajweed}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full tajweed (Correct Pronunciation) course</span>
        </div>
        <span className='advantages-span pre-tilt-span'>Plus</span><br/>
    <Tilt className="tilt-div">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='tilt-container'
        >
          
          <img src={calls} className='img-tilt'></img>
          <h3 className='h3-tilt'>3x Sessions weekly <br/> (30m each)</h3>
          
        </div>

      </motion.div>
    </Tilt>

    <span className='advantages-span'>Tier 2</span>
    <div className='gold-showcase-div reverse'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img arab-img' src={arab}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full Arabic Course from Beginner - Advanced</span>
        </div>
        <div className='gold-showcase-div '>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={callsImg}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Professional Quran lessons by knowledgeable Teachers</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={tajweed}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full tajweed (Correct Pronunciation) course</span>
        </div>
        <span className='advantages-span pre-tilt-span'>Plus</span><br/>

    <Tilt className="tilt-div">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='tilt-container'
        >
          
          <img src={calls} className='img-tilt'></img>
          <h3 className='h3-tilt'>3x to 4x Sessions weekly<br/> (30m each)</h3>
          
        </div>

      </motion.div>
    </Tilt>
    <span className='advantages-span'>Tier 3</span>
    <div className='gold-showcase-div'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img arab-img' src={islamcourse}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full Islamic Studies Course on Essentials of Islam</span>
        </div>
    <div className='gold-showcase-div reverse'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img arab-img' src={arab}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full Arabic Course from Beginner - Advanced</span>
        </div>
        <div className='gold-showcase-div '>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={callsImg}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Professional Quran lessons by knowledgeable Teachers</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <Tilt options={defaultOptions} className="tilt-box">
        <img className='gold-plan-img' src={tajweed}></img>
      </Tilt>
          <span className='showcase-text blue-shadow'>Full tajweed (Correct Pronunciation) course</span>
        </div>
        <span className='advantages-span pre-tilt-span'>Plus</span><br/>
        <div className='tilt-wrap'>
            <Tilt className="tilt-div">
              <motion.div 
              variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] motion-div shadow-card'
              >
                <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='tilt-container'
                >
                  
                  <img src={calls} className='img-tilt'></img>
                  <h3 className='h3-tilt'>3x to 4x Sessions weekly<br/> (30m each)</h3>
                  
                </div>

              </motion.div>
            </Tilt>
            <Tilt className="tilt-div">
              <motion.div 
              variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] motion-div shadow-card'
              >
                <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='tilt-container'
                >
                  
                  <img src={allDay} className='img-tilt'></img>
                  <h3 className='h3-tilt'>Unlimited Resources<br/> & Question Support 24/7.</h3>

                </div>

              </motion.div>
            </Tilt>
        </div>    
    
        <button className='plan-btn gold-btn'>I want this!</button>



      </div>
      </div>
      <div className='contact-wrap'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <div className='contact-container'>
          <h2 className='contact-title'>Get in touch</h2>
          <a href="https://twitter.com/amaaralmadani">
          <svg xmlns="http://www.w3.org/2000/svg" className='contact-svg' viewBox="0 0 50 50" >
  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
</svg>
          </a>
        </div>
      </motion.div>
      </div>
    </div>

   </>
  )
}

export default LandingPage