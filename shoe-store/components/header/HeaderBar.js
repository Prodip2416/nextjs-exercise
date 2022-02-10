import Image from 'next/image';
import Style from '../../styles/HeaderBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { WindowSizeContext } from '../../pages/_app';
import {useContext} from 'react';
import Link from 'next/link';

const HeaderBar = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <>
            <header className={`${size.width <= 1024 ? Style.displayNone : Style.displayBlock}`}>
                <div className={Style.color}>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="p-4">
                                <span className={`${"m-2"} ${Style.signInDiv}`}></span>
                                <span className={Style.location}><i className="bi bi-geo-alt"></i></span>
                                {' '}
                                <span className={Style.text}>FIND A STORE | CUSTOMER CARE: 09678772828</span>
                            </div>
                            <div>
                                <Link href="/" ><a><Image src="/header/logo.png" width={155} height={35} className={Style.image} alt="" /></a></Link>
                            </div>
                            <div>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul style={{ marginLeft: '50px' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span style={{ marginRight: '10px' }} className={Style.text}>SIGN IN</span>
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a className="dropdown-item" href="#">Login</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li>
                                                            <span className="dropdown-item" href="#">Email Address</span>
                                                            <input style={{ width: '90%' }} className="form-control m-2" placeholder="Email Address" />
                                                        </li>
                                                        <li>
                                                            <span className="dropdown-item" href="#">Password</span>
                                                            <input style={{ width: '90%' }} className="form-control m-2" placeholder="Password" />
                                                        </li>
                                                        <li><input style={{ width: '90%' }} className={`${"form-control m-2"} ${Style.signInBtn}`} type="button" value="Login" /></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><input style={{ width: '90%' }} className={`${"form-control m-2"} ${Style.signInCtrBtn}`} type="button" value="Create Account" /></li>
                                                    </ul>
                                                </li>
                                                <li className="mt-2">
                                                    <span className={Style.signInDiv}></span>
                                                </li>
                                                <li>
                                                    <span className="m-2"><FontAwesomeIcon icon={faHeart} className={Style.heart} /></span>
                                                </li>
                                                <li >
                                                    <span className={Style.cart}><i className="bi bi-cart3 m-2"></i></span>
                                                </li>
                                                <li className={`${Style.cartCount}`}>
                                                    <span className="m-2">0</span>
                                                </li>
                                                <li className="">
                                                    <span>
                                                        <input className={Style.search} type="search" placeholder="SEARCH" />
                                                        <i className={`${Style.searchIcon} ${"bi bi-search p-2"}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderBar;