import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__options'>
            <span className='header__optionlineOne'>Hello</span>
            <span className='header__optionTwo'>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__options'>
            <span className='header__optionlineOne'>Returns</span>
            <span className='header__optionTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__options'>
            <span className='header__optionlineOne'>Your</span>
            <span className='header__optionTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className=' header__optionTwo header__basketCount'>0</span>
            </div>
        </Link>

      </div>
    </nav>
  )
}

export default Header
