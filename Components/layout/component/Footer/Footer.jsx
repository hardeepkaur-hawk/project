import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="footer__bg__one">
                    <div className="footer__wrapper__one position-relative pt-180 pt-lg-120">
                        <img src="img/shape/footer__01.png" alt="" className="shapes footer__01" />
                        <img src="img/shape/footer__02.png" alt="" className="shapes footer__02" />
                        <img src="img/footer/footer__one__bg__01.png" alt="" className="shapes footer__one__bg__01" />
                        <div className="container" data-aos="fade-up">
                            <div className="row pb-35">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                                    <div className="footer__widget footer__widget__one mb-30">
                                        <a href="index.html" className="footer-logo d-inline-block mb-30">
                                            <img src="img/logo/header-logo-01.png" alt="footer-logo" />
                                        </a>
                                        <p className="mb-30">Ntec Professional IT Services Ltd Donec suscipit ante ipsum.</p>
                                        <ul>
                                            <li>
                                                <a href="contact.html">
                                                    <img src="img/icon/call__icon.png" alt="" />
                                                    <span>+88 109-241-460</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    <img src="img/icon/email__icon.png" alt="" />
                                                    <span>ntecsupport@gmail.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 ms-auto">
                                    <div className="footer__widget mt-20">
                                        <h4 className="widget__title mb-30">Quick Links</h4>
                                        <ul>
                                            <li><a href="#">Working With You</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">News Center</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 ms-auto">
                                    <div className="footer__widget mt-20">
                                        <h4 className="widget__title mb-30">Services</h4>
                                        <ul>
                                            <li><a href="#">IT Solution</a></li>
                                            <li><a href="#">Cloud Modernization</a></li>
                                            <li><a href="#">Monitoring</a></li>
                                            <li><a href="#">Cyber Security</a></li>
                                            <li><a href="#">Cloud Security</a></li>
                                            <li><a href="#">Protection</a></li>
                                            <li><a href="#">Digital Risk Protection</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                                    <div className="footer__widget footer__contact mb-30 mt-20">
                                        <h4 className="widget__title mb-30">General Enquires</h4>
                                        <div className="location">
                                            <img src="img/icon/location__01.png" alt="" />
                                            <p>14 Short Street Manchester CT 06040, United States</p>
                                        </div>
                                        <div className="devider__line mb-10 mt-30"></div>
                                        <h5 className="mb-20 mt-30">Find Us On Social Media</h5>
                                        <div className="social_media mt-20">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-pinterest"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="devider__line"></div>
                            <div className="copyright__area pt-35">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="text-start">
                                            <div className="copyright__text pb-30">
                                                <p>
                                                    <a className="fw-bold" href="https://themeforest.net/user/template_mr/portfolio">template_mr</a>
                                                    © 2024, All Rights Reserved
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 ms-auto">
                                        <ul className="text-start text-xl-end">
                                            <li><a href="#">Sitemap</a></li>
                                            <li><a href="#">Terms And Conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
