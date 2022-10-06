import React, { useEffect, useRef, useState } from 'react'
import useScroll from '../CastomHooks/useScroll'
import {IoIosArrowBack} from 'react-icons/io'
import {MdOutlineNavigateNext} from 'react-icons/md'

function Notebook() {
  const [position, setPosition] = useState(0)
  const item1 = useRef(null) 
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)
  const item5 = useRef(null)


  const nextHulder = () => {
   if(position >= 4) {
    setPosition(position)
   }else{
    setPosition(position + 1)
   }
  }
  const backHulder = () => {
    if(position <= 0) {
      setPosition(position)
     }else{
      setPosition(position - 1)
     }
  }
  useEffect(() => {
    item1.current.style.transform = `translate(${-position * 100}%)`
    item2.current.style.transform = `translate(${-position * 100}%)`
    item3.current.style.transform = `translate(${-position * 100}%)`
    item4.current.style.transform = `translate(${-position * 100}%)`
    item5.current.style.transform = `translate(${-position * 100}%)`
  })

  return (
    <div className='note'>
        <div className='note__book'>
          <div className={useScroll(1400) ? 'note__window active' : 'note__window'}>
            <button onClick={backHulder} name='back' className='note__button back'><IoIosArrowBack /></button>
            <div ref={item1} className='note__item i1'></div>
            <div ref={item2} className='note__item i2'></div>
            <div ref={item3} className='note__item i3'></div>
            <div ref={item4} className='note__item i4'></div>
            <div ref={item5} className='note__item i5'></div>
            <button onClick={nextHulder} name='next' className='note__button next'><MdOutlineNavigateNext /></button>
          </div>
        </div>
        <div className='note__text'>
            <h1 className='note__h1 h1'>NEW DESIGN</h1>
            <h2 className={useScroll(1200) ? 'note__h2 h2 active' : 'note__h2 h2'}>Resposive design, just need your tap <b className='toch'>....</b></h2>
            <p className={useScroll(1300) ? 'note__p p active' : 'note__p p'}>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.</p>
        </div>
    </div>
  )
}

export default Notebook