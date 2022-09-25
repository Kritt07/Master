import React, { } from 'react'
import useScroll from '../CastomHooks/useScroll'

function Design() {

  return (
    <div className='design'>
        <div className='design__text'>
            <div className='design__titles'>
                <h1 className='design__h1 h1'>new design</h1>
                <h2 className={useScroll(150) ? 'design__h2 active h2' : 'design__h2 h2'}>There is no other platforms for you as like <b className='design__toch toch'>....</b></h2>
            </div>
            <p className={useScroll(320) ? 'design__paragraphs active p' : 'design__paragraphs p'}>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p className={useScroll(450) ? 'design__paragraphs active p' : 'design__paragraphs p'}>    
              Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.
            </p>
        </div>
        <div className='design__fon'></div>
    </div>
  )
}

export default Design