import React, { useState } from 'react'

function Started() {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('Имя должно быть указано')
    const [nameDirty, setNameDirty] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('Почта не может быть пустой')
    const [emailDirty, setEmaileDirty] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')
    const [passwordDirty, setPasswordDirty] = useState(false)


    const nameHundler = (e) => {
        setName(e.target.value)
        const re = /^[A-z ]+$/

        if(e.target.value.length < 3 || e.target.value.length > 12){
            setNameError('Минимум 3 символа и максимум 12')
        } else if(!re.test(e.target.value)){
            setNameError('неккоректное имя')
        }else {
            setNameError('')
        }
    }

    const emailHundler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(e.target.value)){
            setEmailError('неккоректный имейл')
            if(e.target.value === '') {
                setEmailError('Имейл не может быть пустым')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHundler = (e) => {
        setPassword(e.target.value)

        if(e.target.value.length > 8 || e.target.value.length < 3) {
            setPasswordError('пароль не больше 8 и не меньше 3')
            if(!e.target.value) {
                setPasswordError('пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHundler = (e) => {
        if(e.target.name === 'email') {
            setEmaileDirty(true)
        } else if(e.target.name === 'password') {
            setPasswordDirty(true)
        } else if(e.target.name === 'name') {
            setNameDirty(true)
        }
    }

  return (
    <div className='start'>
        <div className='start__title'>
            <h1 className='start__h1'>NEW FEATURES</h1>
            <h2 className='start__h2'>Over 1000 designers are using ...</h2>
        </div>
        <div className='start__main'>
            <div className='start__days'>
                <img src='./image/start/arrow.png' alt='img'/><b>30 days free trial for all.</b>
            </div>
            <form className='start__form'>
                <div>
                    {(nameError && nameDirty) && <div className='start__error'>{nameError}</div>}
                    <input className='start__form_input' value={name} onBlur={e => blurHundler(e)} onChange={e => nameHundler(e)} placeholder='FULL NAME' name='name' type='text' />
                </div>
                <div>
                    {(emailError && emailDirty) && <div className='start__error'>{emailError}</div>}
                    <input className='start__form_input' value={email} onBlur={e => blurHundler(e)} onChange={e => emailHundler(e)}
                        placeholder='YOUR EMAIL' name='email' type='text' />
                </div>
                <div>
                    {(passwordError && passwordDirty) && <div className='start__error'>{passwordError}</div>}
                    <input className='start__form_input' value={password} onBlur={e => blurHundler(e)} onChange={e => passwordHundler(e)}
                        placeholder='PASSWORD' name='password' type='password' />
                </div>

                <input className='start__password' value='TRY NOW' type='submit' />
            </form>
        </div>
        <div className='start__footer'>By Signing up you agree to our <b>terms & Services.</b></div>
    </div>
  )
}

export default Started