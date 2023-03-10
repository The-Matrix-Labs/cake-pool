import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import './style.css';

export  function Lottie1(props) {
  const lot = useRef()
  useEffect(()=>{
    const instance = lottie.loadAnimation({
        container: lot.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: require('../assets/images/PandaLottie.json'),
    });
    console.log(props.onLogo)
    if(props.onLogo){
      lot.current.classList.add('on-logo')
    }
    else{
      lot.current.classList.remove('on-logo')
    }
    return () => instance.destroy();
  }, [props.onLogo])
  return (
    <div ref={lot} className="pandaLottie"></div>
  )
}

export  function Lottie2() {
    const lot = useRef()
  useEffect(()=>{
    const instance = lottie.loadAnimation({
        container: lot.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: require('../assets/images/Panda2Lottie.json'),
    });
    return () => instance.destroy();
  }, [])
  return (
    <div ref={lot} className="panda2Lottie"></div>
  )
}

export  function Lottie3() {
    const lot = useRef()
  useEffect(()=>{
    const instance = lottie.loadAnimation({
        container: lot.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: require('../assets/images/Panda3Lottie.json'),
    });
    return () => instance.destroy();
  }, [])
  return (
    <div ref={lot} className="panda3Lottie"></div>
  )
}
