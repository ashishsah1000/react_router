import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header(){
    return(
        <nav className="header">
            {/* {logo on the left} */}
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/small/amazon_PNG10.png" className="header_logo"></img>
            </Link>
            
            {/* {Search box} */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            
            {/* {3 links} */}
            <div className="header_nav">
                {/* 1st link  */}
                <Link to="/login" className="link">
                    <div className="header_option">
                        <span>Hey Ashish</span>
                        <span className="spamTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/login"  className="link">
                    <div className="header_option">
                        <span>Return</span>
                        <span className="spamTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/login"  className="link">
                    <div className="header_option">
                        <span>Your</span>
                        <span className="spamTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="headerBasket">
                        {/* basket Icon */}
                        <ShoppingBasketIcon  />
                        {/* number of counts */}
                        <span>0</span>
                    </div>
                </Link>
            </div>
            {/* {Cart Icon} */}
        </nav>
    )
}

export default Header