import Style from '../../styles/MegaMenu.module.css';
import Image from 'next/image';
import { useEffect, useContext } from 'react';
import { WindowSizeContext } from '../../pages/_app';
import Link from 'next/link';

var sticky = require('sticky-header');
const stickyHeader = () => {
    useEffect(() => {
        var nav = document.getElementById('nav');
        sticky(nav);
        sticky(nav, 100);
    }, []);
}

const MegaMenu = () => {
    const sticky = stickyHeader();
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <>
            <style jsx>
                {`
                       /* ============ only desktop view ============ */
                       @media all and (min-width: 992px) {                         
                           .navbar .dropdown-menu-end{ right:0; left: auto;  }
                           .navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;   }
                           .navbar .nav-item:hover .nav-link{ color: #fff;  }
                           .navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
                           .navbar .dropdown-menu.fade-up{ top:180%;  }
                           .navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }                       
                       }	
                       /* ============ desktop view .end// ============ */
                       
                       
                       .navbar .megamenu{ padding: 1rem; }
                       /* ============ desktop view ============ */
                       @media all and (min-width: 992px) {
                           
                           .navbar .has-megamenu{position:static!important;}
                           .navbar .megamenu{left:0; right:0; width:100%; margin-top:0;  }
                           
                       }	
                       /* ============ desktop view .end// ============ */
                       
                       
                       /* ============ mobile view ============ */
                       @media(max-width: 991px){
                           .navbar.fixed-top .navbar-collapse, .navbar.sticky-top .navbar-collapse{
                               overflow-y: auto;
                               max-height: 90vh;
                               margin-top:10px;
                           }
                       }
                       /* ============ mobile view .end// ============ */
                      
                `}
            </style>

            <div>
                <nav id="nav" className={`${Style.navBackColor} ${"navbar navbar-expand-lg navbar-dark bg-primary"}`}>

                    {
                        size.width <= 991 &&
                        <div className={`${Style.menu} ${"d-flex justify-content-between align-items-center"}`}>
                            <div>
                                <i className={`${Style.navCollapseColor} ${"bi bi-list p-2"}`} data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation"></i>
                                <i className={`${Style.search} ${"bi bi-search p-2"}`}></i>
                            </div>
                            <div>
                                <Image className="" src="/header/logo.png" width={100} height={25} alt="" />
                            </div>
                            <div>
                                <span className="">
                                    <i className={` ${Style.cart} ${"bi bi-person"}`}></i>
                                    <i className={` ${Style.cart} ${"bi bi-cart3 m-2"}`}></i>
                                </span>
                            </div>
                        </div>
                    }

                    {/* <div className={`${size.width <= 991 ? Style.divLogo : ''}`}> */}
                    <div className={`${Style.centerMenu} ${"collapse navbar-collapse"} ${size.width <= 991 ? Style.divLogo : ''}`} id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown has-megamenu">
                                <a className={`${Style.navLinkColor} ${"nav-link"}`} href="#" data-bs-toggle="dropdown">MEN  </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row g-3">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>SHOES</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}><Link href="/subCategory"><a className={Style.menuSubTitle}>Casual shoes</a></Link></span></li>
                                                    <li><span className={Style.menuSubTitle}>Formal shoes</span></li>
                                                    <li><span className={Style.menuSubTitle}>Mens shoes</span></li>
                                                    <li><span className={Style.menuSubTitle}>Mocassino</span></li>
                                                    <li><span className={Style.menuSubTitle}>Sports</span></li>
                                                    <li><span className={Style.menuSubTitle}>Custom Menu</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BRANDS</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Adidas</span></li>
                                                    <li><span className={Style.menuSubTitle}>Bata</span></li>
                                                    <li><span className={Style.menuSubTitle}>Bata Comfit</span></li>
                                                    <li><span className={Style.menuSubTitle}>Hush Puppies</span></li>
                                                    <li><span className={Style.menuSubTitle}>North Star</span></li>
                                                    <li><span className={Style.menuSubTitle}>Power</span></li>
                                                    <li><span className={Style.menuSubTitle}>Weinbrenner</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY COLOR</h6>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⬤ Black'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔵 Blue'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟤 Brown'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🌑 Gray'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟢 Green'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔴 Red'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟣 Pink'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟡 Yellow'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⚪ White'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY PRICE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Under Tk.1000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1001 - Tk.1500</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1501 - Tk.2000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.2001 - Tk.3000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.3001 - Tk.4000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.4001 - Tk.5000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Above Tk.5000</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY SIZE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>{'👞 5'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 6'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 7'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 8'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 9'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 10'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👞 11'}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <a className={`${Style.navLinkColor} ${"nav-link "}`} href="#" data-bs-toggle="dropdown">WOMEN  </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row g-3">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>SHOES</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Ladies Sandals</span></li>
                                                    <li><span className={Style.menuSubTitle}>Ladies Heel</span></li>
                                                    <li><span className={Style.menuSubTitle}>Ladies Sports shoes </span> </li>
                                                    <li><span className={Style.menuSubTitle}>Ladies Casual & Formal Closed</span></li>
                                                    <li><span className={Style.menuSubTitle}>Shoes</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BRANDS</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Adidas</span></li>
                                                    <li><span className={Style.menuSubTitle}>Bata</span></li>
                                                    <li><span className={Style.menuSubTitle}>Bata Comfit</span></li>
                                                    <li><span className={Style.menuSubTitle}>Hush Puppies</span></li>
                                                    <li><span className={Style.menuSubTitle}>North Star</span></li>
                                                    <li><span className={Style.menuSubTitle}>Power</span></li>
                                                    <li><span className={Style.menuSubTitle}>Maria Claire</span></li>
                                                    <li><span className={Style.menuSubTitle}>Scholl</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY COLOR</h6>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⬤ Black'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔵 Blue'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟤 Brown'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🌑 Gray'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟢 Green'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔴 Red'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟣 Pink'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟡 Yellow'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⚪ White'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY PRICE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Under Tk.1000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1001 - Tk.1500</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1501 - Tk.2000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.2001 - Tk.3000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.3001 - Tk.4000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.4001 - Tk.5000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Above Tk.5000</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY SIZE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>{'👠 3'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👠 4'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👠 5'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👠 6'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👠 7'}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <a className={`${Style.navLinkColor} ${"nav-link "}`} href="#" data-bs-toggle="dropdown">CHILDREN  </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row g-3">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BOYS</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Sandals</span></li>
                                                    <li><span className={Style.menuSubTitle}>Sports</span></li>
                                                    <li><span className={Style.menuSubTitle}>Slippers</span></li>
                                                    <li><span className={Style.menuSubTitle}><h6 className={`${"mt-3"} ${Style.text}`}>GIRLS</h6></span></li>
                                                    <li><span className={Style.menuSubTitle}>Sandals</span></li>
                                                    <li><span className={Style.menuSubTitle}>Sports</span></li>
                                                    <li><span className={Style.menuSubTitle}>Slippers</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BRANDS</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Bata</span></li>
                                                    <li><span className={Style.menuSubTitle}>Weinbrenner</span></li>
                                                    <li><span className={Style.menuSubTitle}>Bubblegummers</span></li>
                                                    <li><span className={Style.menuSubTitle}>Power</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY COLOR</h6>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⬤ Black'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔵 Blue'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟤 Brown'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🌑 Gray'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟢 Green'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🔴 Red'}</span>
                                                    </li>
                                                    <li>
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟣 Pink'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'🟡 Yellow'}</span>
                                                    </li>
                                                    <li >
                                                        <span className={`${Style.menuSubTitle} ${"mb-2"}`}>{'⚪ White'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY PRICE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Under Tk.1000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1001 - Tk.</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.1501 - Tk.2000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.2001 - Tk.3000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.3001 - Tk.4000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Tk.4001 - Tk.5000</span></li>
                                                    <li><span className={Style.menuSubTitle}>Above Tk.5000</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BY SIZE</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>{'👟 1'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 2'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 3'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 4'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 5'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 6'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 7'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 8'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 9'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 10'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 11'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 12'}</span></li>
                                                    <li><span className={Style.menuSubTitle}>{'👟 13'}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <a className={`${Style.navLinkColor} ${"nav-link "}`} href="#" data-bs-toggle="dropdown">ACCESSORIES  </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row g-3">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>BAG</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Ladies Bag</span></li>
                                                    <li><span className={Style.menuSubTitle}>Backpack</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                                <h6 className={Style.text}>OTHERS</h6>
                                                <ul className="list-unstyled">
                                                    <li><span className={Style.menuSubTitle}>Belts</span></li>
                                                    <li><span className={Style.menuSubTitle}>Wallets</span></li>
                                                    <li><span className={Style.menuSubTitle}>Shoe Shiner</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-6">
                                            <div className="col-megamenu">
                                            </div>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`${Style.navLinkColor} ${"nav-link"}`} href="#" data-bs-toggle="dropdown"> BATA CLUB  </a>
                                <ul className="dropdown-menu fade-up">
                                    <li><a className="dropdown-item" href="#"> Check your Bata Club point</a></li>
                                    <li className="divider"></li>
                                    <li><a className="dropdown-item" href="#"> Register yourself</a></li>
                                    <li><a className="dropdown-item" href="#"> Update Your Bata Clun profile </a></li>
                                    <li><a className="dropdown-item" href="#"> Bata Club benefits</a></li>
                                </ul>
                            </li>
                            <li className="nav-item active"> <a className={`${Style.navLinkColor} ${"nav-link"}`} href="#">COVID-19 </a> </li>
                            <li className="nav-item"><a className={`${Style.navLinkColor} ${"nav-link"}`} href="#"> BLOG </a></li>
                            <li className="nav-item"><a className={`${Style.navLinkColor} ${"nav-link"}`} href="#"> E-VOUCHER </a></li>
                        </ul>
                    </div>
                    {/* </div> */}
                </nav>
            </div>
        </>
    );
}

export default MegaMenu;

