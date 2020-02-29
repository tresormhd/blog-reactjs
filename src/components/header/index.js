import React  from "react";
import { Link,} from 'react-router-dom';

const Header =() =>  {
    
    return (
        <>
            <header>
                <div className="wrap-menu-header gradient1 trans-0-4">
                    <div className="container h-full">
                        <div className="wrap_header trans-0-3">
                            <div className="logo">
                                <Link to="/" >
                                    <img src="/images/icons/logo.png" alt="IMG-LOGO" data-logofixed="/images/icons/logo2.png" />
                                </Link>
                                    
                            </div>

                            <div className="wrap_menu p-l-45 p-l-0-xl">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <li>
                                            <Link to="/" > Home</Link>
                                        </li>

                                        <li>
                                            <Link to="/galery" > Gallery</Link>
                                        </li>

                                        <li>
                                            <Link to="/about" >About</Link>
                                        </li>

                                        <li>
                                            <Link to="/blog" >Blog</Link>
                                        </li>

                                        <li>
                                            <Link to="/contact" >Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="social flex-w flex-l-m p-r-20">
                                <a href="#"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true"></i></a>

                                <button className="btn-show-sidebar m-l-33 trans-0-4"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="sidebar trans-0-4">
                <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>
                <ul className="menu-sidebar p-t-95 p-b-70">
                    <li className="t-center m-b-13">
                        <Link to="/" className="txt19" >
                            Home
                        </Link>
                    </li>

                    <li className="t-center m-b-13">
                        <Link to="/galery" className="txt19" > 
                            Gallery
                        </Link>
                       
                    </li>

                    <li className="t-center m-b-13">
                        <Link to="/about" className="txt19" >
                            About
                        </Link>
                       
                    </li>

                    <li className="t-center m-b-13">
                        <Link to="/blog" className="txt19">
                            Blog
                        </Link>
                      
                    </li>

                    <li className="t-center m-b-33">
                        <Link to="/contact" className="txt19">
                            Contact
                        </Link>
                       
                    </li>

                </ul>

            </aside>
       
        </>
    );
   
}
export default Header