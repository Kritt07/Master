import React from 'react'
import useScroll from '../CastomHooks/useScroll'

function Awesome() {
  return (
    <div className='awesome'>
        <div className={useScroll(2800) ? 'awesome__text active' : 'awesome__text'}>
            <div className='awesome__h1'>NEW FEATURES</div>
            <div className='awesome__h2'>Some awesone features</div>
            <div className='awesome__p'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper.</div>
        </div>
        <div className={useScroll(3000) ? 'awesome__window active' : 'awesome__window'}></div>
    </div>
  )
}

export default Awesome