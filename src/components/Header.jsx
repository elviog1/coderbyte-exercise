import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
export default function Header() {
  return (
    <header className='header-container'>
        <img className='logo-header' alt='logo' src='https://coderbytestaticimages.s3.amazonaws.com/consumer-v2/nav/coderbyte_logo_digital_multi_light.png' />
        <form className='header-form'>
            <button className='header-button'>
                <SearchIcon className='header-icon search-icon'/>
            </button>
            <input className='header-search' type="search" placeholder="Search products"></input>
        </form>
        <div className='header-signIn-container'>
            <div className='header-div-signIn'>
                <PersonSharpIcon className='header-icon'/>
                <span className='header-span'>Sign in</span>
            </div>
            <div className='header-div-cart'>
                <LocalMallIcon className='header-icon' />
                <span className='header-span'>Cart</span>
            </div>
        </div>
    </header>
  )
}
