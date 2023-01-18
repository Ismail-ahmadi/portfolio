import React, { useEffect, useState } from 'react'
import './themeSwitcher.css'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {CgClose} from 'react-icons/cg'
import {HiColorSwatch} from 'react-icons/hi'

function ThemeSwitcher() {
    const [hue, setHue] = useState('215')
    const [theme, setTheme] = useState('dark')
    const [isColorPicking, setIsColorPicking] = useState(false)

    useEffect( () => {
        document.documentElement.setAttribute('color-scheme', theme)
    },[theme])
    useEffect( () => {
      document.documentElement.style.setProperty('--_hue', hue)
  },[hue])
  return (
    <div className='themeSwitcher__container'>
      {
        isColorPicking ? (
            <>
            <button
            className='btn themeSwitcher__container-close'
            aria-label='Close color picking mode'
            onClick={() => setIsColorPicking(false)}
            > < CgClose className='themeSwitcher__container-icon' /></button>
            <input 
            type="range"
            className='picker'
            aria-label='Change color theme slider'
            min= "0"
            max="350"
            value={hue}
            onInput={(e) => setHue(e.target.value)}

             />
            </>
        ) : (
            <div className='themeSwitcher__btns'>
                <button 
                className='btn'
                aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                role="switch"
                onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}
                > 
                   {theme === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill /> }
                </button>
                <button 
                className='btn'
                aria-label='Enable Color picking mode'
                onClick={() => {setIsColorPicking(isColorPicking === true ? false : true)}}
                >
                    <HiColorSwatch />
                </button>
            </div>
        )
      }
    </div>
  )
} 

export default ThemeSwitcher
