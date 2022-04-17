import React from 'react'
import amazonlogo from './amazonlogo.PNG'
import  './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

const Header = () => {
    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            {console.log('basket here',basket)}
            <Link to="/">
            <img className="header_logo" src= {amazonlogo} alt="logo"/>      
            </Link>

            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                {/* //href refreshes the page , this does not  */}
                <Link to={!user?'/login':'/'} className="header_link">
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello, {user? user?.email:'Guest'}
                        </span>
                        <span className="header_optionLineTwo">
                           {user?'Sign Out':'Sign In'} 
                        </span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Returns
                        </span>
                        <span className="header_optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            your
                        </span>
                        <span className="header_optionLineTwo">
                            Prime
                        </span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLineTwo header_basketCount">
                        {basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
