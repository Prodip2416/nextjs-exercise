import Style from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useContext } from "react";
import { WindowSizeContext } from '../../pages/_app';

const Footer = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <div className={`${"mt-5"} ${Style.footer}`}>
            <div className={`${"container"}`}>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className={`${size.width < 768 ? "accordion-button collapsed" : "collapsed"} ${Style.footer} ${Style.title}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        ABOUT
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className={`${size.width < 768 ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled">
                                            <li><span className={Style.subTitle}>About Us</span></li>
                                            <li><span className={Style.subTitle}>Careers</span></li>
                                            <li><span className={Style.subTitle}>Financial Info</span></li>
                                            <li><span className={Style.subTitle}>Bata Industrials</span></li>
                                            <li><span className={Style.subTitle}>Share Department</span></li>
                                            <li><span className={Style.subTitle}>Refund Policy</span></li>
                                            <li><span className={Style.subTitle}>Terms of Service</span></li>
                                            <li><span className={Style.subTitle}>Privacy Policy</span></li>
                                            <li><span className={Style.subTitle}>About Us</span></li>
                                            <li><span className={Style.subTitle}>Shipping Policy</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className={`${size.width < 768 ? "accordion-button collapsed" : "collapsed"} ${Style.footer} ${Style.title}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        INFORMATION
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className={`${size.width < 768 ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled">
                                            <li><span className={Style.subTitle}>bKash Payments</span></li>
                                            <li><span className={Style.subTitle}>TERMS & CONDITIONS</span></li>
                                            <li><span className={Style.subTitle}>Payment Options</span></li>
                                            <li><span className={Style.subTitle}>Privacy Policy</span></li>
                                            <li><span className={Style.subTitle}>Franchise Programme</span></li>
                                            <li><span className={Style.subTitle}>Coverage areas</span></li>
                                            <li><span className={Style.subTitle}>Refund Policy</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className={`${size.width < 768 ? "accordion-button collapsed" : "collapsed"} ${Style.footer} ${Style.title}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        POPULAR BRANDS
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className={`${size.width < 768 ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> <ul className="list-unstyled">
                                        <li><span className={Style.subTitle}>Bata</span></li>
                                        <li><span className={Style.subTitle}>Hush Puppies</span></li>
                                        <li><span className={Style.subTitle}>Power</span></li>
                                        <li><span className={Style.subTitle}>Comfit</span></li>
                                        <li><span className={Style.subTitle}>Weinbrenner</span></li>
                                        <li><span className={Style.subTitle}>North Star</span></li>
                                        <li><span className={Style.subTitle}>Marie Claire</span></li>
                                    </ul></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className={`${size.width < 768 ? "accordion-button collapsed" : "collapsed"}} ${Style.footer} ${Style.title}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        CUSTOMER SERVICE
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className={`${size.width < 768 ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled">
                                            <li><span className={Style.subTitle}>FAQs</span></li>
                                            <li><span className={Style.subTitle}>MyBata</span></li>
                                            <li><span className={Style.subTitle}>Store Locator</span></li>
                                            <li><span className={Style.subTitle}>All About Feet</span></li>
                                            <li><span className={Style.subTitle}>Contact Infot</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className={`${size.width < 768 ? "accordion-button collapsed" : "collapsed"} ${Style.footer} ${Style.title}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        INFO
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className={`${size.width < 768 ? "accordion-collapse collapse show" : "accordion-collapse collapse show"}`} aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled">
                                            <li><span className={Style.subTitle}>Bata Shoe Company Bangladesh.</span></li>
                                            <li><span className={Style.subTitle}>Tongi Gazipur, Bangladesh.</span></li>
                                            <li><span className={Style.subTitle}><br /></span></li>
                                            <li><span className={Style.subTitle}>Call us at: 09678772828</span></li>
                                            <li><span className={Style.subTitle}>Email: bd.customercare@bata.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            {
                                size.width < 768 ?
                                    <>
                                        <p className={`${Style.newsLetter} ${"m-3"}`}>Sign up for our Newsletter</p>
                                        <input className={`${"form-control"} ${Style.emailAddress}`} type="text" placeholder="Your email address" />
                                    </>
                                    : <div className="d-flex">
                                        <span className={`${Style.newsLetter} ${"m-3"}`}>Sign up for our Newsletter</span>
                                        <input className={Style.emailAddress} type="text" placeholder="Your email address" />
                                    </div>
                            }
                        </div>
                        <div className="col-md-2 col-lg-3"></div>
                        <div className="col-md-4 col-lg-3 mt-3">
                            <FontAwesomeIcon icon={faFacebook} className={Style.icon} />
                            <FontAwesomeIcon icon={faTwitter} className={Style.icon} />
                            <FontAwesomeIcon icon={faInstagram} className={Style.icon} />
                            <FontAwesomeIcon icon={faYoutube} className={Style.icon} />
                        </div>
                        <p className={`${Style.address} ${"m-3 text-center text-secondary"}`}>© 2021 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 1710, Gazipur, Bangladesh</p>
                        <div className="text-center mb-5">
                            <span className="m-2"><Image src="/footer/1.png" className="" width={24} height={24} alt="" /></span>
                            <span className="m-2"><Image src="/footer/2.png" className="" width={24} height={24} alt="" /></span>
                            <span className="m-2"><Image src="/footer/3.png" className="" width={24} height={24} alt="" /></span>
                        </div>
                        <div className={`${Style.fixed} ${"text-right"}`}>
                            <Image className={Style.message} src="/footer/4.png" width={109} height={29} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;