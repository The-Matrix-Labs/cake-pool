import React, { useEffect, useRef, useState} from 'react'
import './style.css'
import {ReactComponent as Menu} from '../assets/images/icon-hamburger.svg'
import {ReactComponent as CloseIcon} from '../assets/images/icon-close.svg'
import { ReactComponent as Telegram2 } from '../assets/images/telegram1.svg';
import { ReactComponent as Discord2 } from '../assets/images/discord1.svg'
import { ReactComponent as Twitter2 } from '../assets/images/twitter1.svg';

export default function Navbar(props) {
  const [menu, setmenu] = useState(false);
  const myNav = useRef();
  const myLogo = useRef();
  const myList = useRef();
  const myLink = useRef();
  const bgColor = props.backGround;
  const textColor = props.textColor;
  useEffect(()=>{
    myNav.current.style.backgroundColor = bgColor;
    if (bgColor === 'white')
      myNav.current.style.boxShadow = `0 0 60px 1px rgba(0, 0, 0, 0.10)`;
    else myNav.current.style.boxShadow = `0 0 0 0 black`;
    myLogo.current.style.color = textColor;
    myList.current.style.color = textColor;
    myLink.current.style.color = textColor;
  }, [bgColor, textColor])
 

  function toggleIcon(){
    const primaryNav = document.querySelector(".primary-navigation");
    const primaryHeader = document.querySelector(".primary-header");
    const primaryButton = document.querySelector(".toggleDisplay");
    const primarySocialIcon = document.querySelector(".toggleDisplay2");
    if(menu){
      setmenu(false);
    }
    else{
      setmenu(true);
    }
    primaryNav.toggleAttribute("data-visible");
    primaryButton.toggleAttribute("data-visible");
    primarySocialIcon.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");  
  }
  function showAbout(){
    props.setabout(true);
    props.settokenomics(false);
    props.setfuture(false);
  }
  function showTokenomics(){
    props.setabout(false);
    props.settokenomics(true);
    props.setfuture(false);
  }
  function showFuture(){
    props.setabout(false);
    props.settokenomics(false);
    props.setfuture(true);
  }

  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id='nav-wrapper' ref={myNav}>
            <div className="logo" ref={myLogo}>
              <img src={require('../assets/images/4500_6_06-ai-2.png')} alt="Manage" />
              <p>Cake Pool</p>
            </div>
            {menu?<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              
              <CloseIcon className="icon-close" aria-hidden="true"/>
              {/* <MenuIcon className="icon-hamburger" aria-hidden="true" /> */}
              <span className="visually-hidden">Menu</span>
            </button>
            :<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              {/* <CloseIcon className="icon-close" aria-hidden="true" /> */}
              <Menu className="icon-hamburger" aria-hidden="true" />
              <span className="visually-hidden">Menu</span>
            </button>}
            <nav className="primary-navigation">
              <ul className="nav-list" aria-label="Primary" id="primary-navigation" ref={myList}>
                <li><button onClick={showAbout} className='no-style'> About Us</button></li>
                <li><button onClick={showTokenomics} className='no-style'> Tokenomics</button></li>
                <li><button onClick={showFuture} className='no-style'> Future</button></li>
                <li><a href='https://whitepaper.cakepool.net/' alt='' ref={myLink}> WhitePaper</a></li>
                <li className='toggleDisplay'><button  className="button btn-mobile">Buy Now</button></li>
              </ul>
              <ul className='social-icon-list-nav toggleDisplay2'>
              <li><a href="https://t.me/CakePool"><Telegram2 className='nav-icon' fill={textColor}/></a></li>
                                <li><a href="https://twitter.com/CakePoolTweets"><Twitter2 className='nav-icon' fill={textColor}/></a></li>
                                <li><a href="https://discord.com/invite/XdacqRMKbq"><Discord2 className='nav-icon' fill={textColor}/></a></li>
              </ul>
              
            </nav>
            <button  className="button display-sm-hidden display-md-inline-flex">Buy Now</button>
          </div>
        </div>
      </header>
    </>
  )
}
