import React, { useRef, useState } from 'react'
import video from '../fon/gori.webm'
import {AiFillPlayCircle} from 'react-icons/ai'
import {BsStopCircle} from 'react-icons/bs'

function Header() {
  const [play, setPlay] = useState(false)
  // const [scroll, setScroll] = useState(0)
  // const [classTitle, setClassTitle] = useState('header__title')
  const vidRef = useRef(null);


  const clickHolder = () => {
    setPlay(!play);

    if(!play) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  }


  // const handleScroll = () => {
  //   setScroll(window.scrollY)
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   window.addEventListener('scroll', handleTitle)
  //   console.log(scroll);
  // })
  // const handleTitle = () => {
  //   if(scroll >= 0) {
  //     setClassTitle('header__title scroll')
  //   } else {
  //     setClassTitle('header__title')
  //   }
  // }
  return (
    <div className='header'>
        <video ref={vidRef} className='header__video' src={video} type='video/webm' muted loop></video>
        <div className='header__box'>
          <div className='header__title'>
            There is no other platforms for you as like
          </div>
          {play ? <BsStopCircle onClick={clickHolder} className='header__player' /> : <AiFillPlayCircle onClick={clickHolder} className='header__player' />}
          <div className='header__bottom'>
              <button className='header__btn btn'><a href='/#'>Try now</a></button>
              <div className='header__text'>* No need to add cards details</div>
          </div>
        </div>
    </div>
  )
}

export default Header