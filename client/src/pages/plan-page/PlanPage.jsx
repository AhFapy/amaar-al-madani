import React from 'react'
import "./plan-page-styles.css"
import BronzeImg from "../../assets/bronze-img.jpg"
import SilverImg from "../../assets/silver-img.jpg"
import GoldImg from "../../assets/gold-img.jpg"

function PlanPage(props) {
  function redirectToBronze() {
    window.location.href = "https://pool-stop-378.notion.site/Leo-s-Lion-Teamspace-e97e36de437547a3b2c0421992fb12df?pvs=4"
  }
  function redirectToSilver() {
    window.location.href = "https://buy.stripe.com/bIYcP7aXjeBj8aQ8wx"
  }
  function redirectToGold() {
    window.location.href = "https://buy.stripe.com/fZecP78PbeBjaiY8ww"
  }


  return (
    <div className='plan-page-wrapper'>
      <div className='plan-page-nav'>
        <span className='plan-page-header'>{props.plan} PLAN</span>
      </div>
      <div className='plan-container'>
        <div className='video-container'> 
        *video*
        </div>
        <div className='plan-info'>
        {props.plan === "BRONZE" ? <img className='img-plan' src={BronzeImg}/> : ""}
        {props.plan === "SILVER" ? <img className='img-plan' src={SilverImg}/> : ""}
        {props.plan === "GOLD" ? <img className='img-plan' src={GoldImg}/> : ""}
        <span className='plan-sub'>{props.plan}</span>

        {props.plan === "BRONZE" ? <span className='span-plan-info'>FREE PLAN</span> : ""}
        {props.plan === "SILVER" ? <span className='span-plan-info'>Basic Lions Coaching Bundle</span> : ""}
        {props.plan === "GOLD" ? <span className='span-plan-info'>Premium Level Lions Coaching Bundle</span> : ""}
        <div className='stripe-btn-div'>
        {props.plan === "BRONZE" ? <button onClick={redirectToBronze} className='stripe-btn'>Subscribe</button> : ""}
        {props.plan === "SILVER" ? <button onClick={redirectToSilver} className='stripe-btn'>Start Now</button> : ""}
        {props.plan === "GOLD" ? <button onClick={redirectToGold} className='stripe-btn'>Start Now</button> : ""}
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlanPage