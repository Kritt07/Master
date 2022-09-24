import React, { } from 'react'
import useScroll from '../CastomHooks/useScroll'

function Featur() {
  return (
    <div className='featur'>
        <div className='featur__box'>
            <div className='featur__titles'>
                <h1 className='featur__h1'>NEW FEATURES</h1>
                <h2 className='featur__h2'>Some awesone features</h2>
            </div>
            <div className='featur__columns'>
                <div className={useScroll(1100) ? 'featur__column left active' : 'featur__column left'}>
                    <img className='featur__img' src='./image/featur/picture.png' alt='pictur'/>
                    <h3 className='featur__h3'>Some awesone features</h3>
                    <p className='featur__paragraph'>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                </div>
                <div className={useScroll(1100) ? 'featur__column center active' : 'featur__column center'}>
                    <img className='featur__img' src='./image/featur/airplane.png' alt='airplaine'/>
                    <h3 className='featur__h3'>Some awesone features</h3>
                    <p className='featur__paragraph'>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                </div>
                <div className={useScroll(1100) ? 'featur__column right active' : 'featur__column right'}>
                    <img className='featur__img' src='./image/featur/bulb.png' alt='bulb'/>
                    <h3 className='featur__h3'>Some awesone features</h3>
                    <p className='featur__paragraph'>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featur