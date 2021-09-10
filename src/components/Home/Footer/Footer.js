import React from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer class={style.footerSection}>
            <div class="container">
                <div class={style.footerCta} className="pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faMapMarkerAlt} />
                                <div class={style.ctaText}>
                                    <h4 className="text-start">Find us</h4>
                                    <span>1010 Avenue, Badda - Dhaka</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faPhone} />
                                <div class={style.ctaText}>
                                    <h4 className="text-start">Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class={style.singleCta}>
                                <FontAwesomeIcon className={style.fas} icon={faEnvelope} />
                                <div class={style.ctaText}>
                                    <h4 className="text-start">Mail us</h4>
                                    <span>E-ShebaHelp@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={style.footerContent} className="mt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class={style.footerWdget}>
                                <div class={style.footerLogo}>
                                    <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                                </div>
                                <div class={style.footerText}>
                                    <p className="text-sm-start">E-Sheba is here to give you the best service with refundable policies, here you may get all kind of services as you see fit.</p>
                                </div>
                                <div class={style.footerSocialIcon}>
                                    <span>Follow us</span>
                                    <Link to="/"><FontAwesomeIcon className={style.facebookBg} className={style.SocialIcon} icon={faFacebookSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.twitterBg} className={style.SocialIcon} icon={faTwitterSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} className={style.SocialIcon} icon={faYoutubeSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} className={style.SocialIcon} icon={faInstagramSquare} /></Link>
                                    <Link to="/"><FontAwesomeIcon className={style.youtubeBg} className={style.SocialIcon} icon={faLinkedinIn} /></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class={style.footerWdget}>
                                <div class={style.footerWdgetHeading}>
                                    <h3 className="text-start">Useful Links</h3>
                                </div>
                                <div className="d-flex">
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
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class={style.footerWdget}>
                                <div class={style.footerWdgetHeading}>
                                    <h3 className="text-start">Subscribe</h3>
                                </div>
                                <div class={style.footerText} className="mb-25">
                                    <p className="text-start text-secondary">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div class={style.subscribeForm}>
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
        <div class={style.copyrightArea}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class={style.copyrightText}>
                                <p>Copyright &copy; 2021, All Right Reserved <Link to="">Auto Repair</Link></p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class={style.footerMenu}>
                                <ul>
                                    <li><Link className="text-decoration-none" to="/">Home</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Terms</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Privacy</Link></li>
                                    <li><Link className="text-decoration-none" to="/">Policy</Link></li>
                                    <li><Link className="text-decoration-none" to="/contact">Contact</Link></li>
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