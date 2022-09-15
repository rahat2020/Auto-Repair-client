import React from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className={style.footerSection}>
            <div className="container">
                <div className="pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faMapMarkerAlt} />
                                <div className={style.ctaText}>
                                    <h4 className="text-start">Find us</h4>
                                    <span>1010 Avenue, Badda - Dhaka</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faPhone} />
                                <div className={style.ctaText}>
                                    <h4 className="text-start">Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faEnvelope} />
                                <div className={style.ctaText}>
                                    <h4 className="text-start">Mail us</h4>
                                    <span>Auto-Repair@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className={style.footerWdget}>
                                <div className={style.footerLogo}>
                                    <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                                </div>
                                <div className={style.footerText}>
                                    <p className="text-sm-start">E-Sheba is here to give you the best service with refundable policies, here you may get all kind of services as you see fit.</p>
                                </div>
                                <div className={style.footerSocialIcon}>
                                    <span>Follow us</span>
                                    <Link to="/"><FontAwesomeIcon className={style.facebookBg} id={style.SocialIcon} icon={faFacebookSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.twitterBg} id={style.SocialIcon} icon={faTwitterSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} id={style.SocialIcon} icon={faYoutubeSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} id={style.SocialIcon} icon={faInstagramSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} id={style.SocialIcon} icon={faLinkedinIn} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className={style.footerWdget}>
                                <div className={style.footerWdgetHeading}>
                                    <h3 className="text-start">Useful Links</h3>
                                </div>
                                {/* <div className="d-flex">
                                <ul className={style.li} className="text-start text-decoration-none">
                                    <li><Link to="/" className="text-decoration-none">Home</Link></li>
                                    <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
                                    <li><Link to="/services" className="text-decoration-none">services</Link></li>
                                    <li><Link to="/android" className="text-decoration-none">Andriod App</Link></li>
                                </ul>
                                <ul className={style.li} className="text-start text-decoration-none">
                                    <li><Link to="/ios" className="text-decoration-none">Ios app</Link></li>
                                    <li><Link to="/offer" className="text-decoration-none">Special offer</Link></li>
                                    <li><Link to="/contact" className="text-decoration-none">Contact us</Link></li>
                                    <li><Link to="/latest" className="text-decoration-none">Latest News</Link></li>
                                </ul>
                                </div> */}
                                
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className={style.footerWdget}>
                                <div className={style.footerWdgetHeading}>
                                    <h3 className="text-start">Subscribe</h3>
                                </div>
                                <div id={style.footerText} className="mb-25">
                                    <p className="text-start text-secondary">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className={style.subscribeForm}>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button>  <FontAwesomeIcon icon={faPaperPlane} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className={style.copyrightArea}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className={style.copyrightText}>
                                <p>Copyright &copy; 2021, All Right Reserved <Link to="">Auto Repair</Link></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className={style.footerMenu}>
                                <ul>
                                    <li><Link className="text-decoration-none" to="/">Home</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Terms</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Privacy</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Policy</Link></li>
                                    <li><Link className="text-decoration-none" to="/contacts">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;