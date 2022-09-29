import React, {} from 'react'
import useScroll from '../CastomHooks/useScroll'

function Employee() {

  return (
    <div className='employee'>
        <div className='employee__columns'>
            <div className={useScroll(2200) ? 'employee__column active' : 'employee__column'}>
                <div className='employee__img'><img src='https://ngcmshak.ru/uploads/dsn/fe/72/001/thumb/1587646418_38-p-besshovnie-foni-dlya-saitov-112.jpg' alt='img'/></div>
                <div className='employee__h1'>Jonathon Doe</div>
                <div className='employee__h2'>Co Founder</div>
                <div className='employee__text'>“Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”</div>
            </div>
            <div className={useScroll(2200) ? 'employee__column active' : 'employee__column'}>
                <div className='employee__img'><img src='./image/employee/hits.png' alt='img'/></div>
                <div className='employee__h1'>Jonathon Doe</div>
                <div className='employee__h2'>Co Founder</div>
                <div className='employee__text'>“Pellentesque ornare sem lacinia quam. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”</div>
            </div>
            <div className={useScroll(2200) ? 'employee__column active' : 'employee__column'}>
                <div className='employee__img'><img src='./image/employee/hits.png' alt='img'/></div>
                <div className='employee__h1'>Jonathon Doe</div>
                <div className='employee__h2'>Co Founder</div>
                <div className='employee__text'>“Aenean eu leo quam. Pellentesque ornare sem lacinia qua emere wancerid elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn”</div>
            </div>
        </div>
        <div className='employee__icons'>
            <div className='employee__icon'><img src='https://ngcmshak.ru/uploads/dsn/fe/72/001/thumb/1587646418_38-p-besshovnie-foni-dlya-saitov-112.jpg' alt='icon'/></div>
            <div className='employee__icon'><img src='./image/employee/rvlvr.png' alt='icon'/></div>
            <div className='employee__icon'><img src='./image/employee/planate.png' alt='icon'/></div>
            <div className='employee__icon'><img src='./image/employee/igor.png' alt='icon'/></div>
            <div className='employee__icon'><img src='./image/employee/sienna.png' alt='icon'/></div>
        </div>
    </div>
  )
}

export default Employee