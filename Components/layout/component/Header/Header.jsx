import React from "react";

export default function Header() {
    return (
        <>
            <header className="theme-main-menu theme-menu-one pt-10 pb-10 position-relative">
                <div className="main-header-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 d-none d-xl-inline-block">
                                <div className="logo-area">
                                    <a className="front" href="#"><img src="img/logo/header-logo.png"
                                        alt="Header-logo" /></a>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-6 d-flex align-items-center">
                                <div className="logo-area d-xl-none d-md-inline-block">
                                    <a className="front" href="#"><img src="img/logo/header-logo-01.png"
                                        alt="Header-logo" /></a>
                                </div>
                                <div className="main-menu d-none d-xl-block">
                                    <nav id="mobile-menu">
                                        <ul className="menu-list ps-0">
                                            <li>
                                                <a href="app/page.tsx">  Home </a>    </li>
                                            <li>
                                                <a href="about">About</a>
                                            </li> 
                                            <li>
                                                <a href="contact">Contact</a>

                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-4 col-6 d-flex align-items-center justify-content-end">
                                <div className="right-nav d-flex align-items-center justify-content-end">
                                    <div className="d-none d-xxl-inline-block">
                                        <div className="contact__info d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/icon/header__icon__01.svg" alt="" className="" />
                                            </div>
                                            <div className="info">
                                                <p>Phone Call Now !</p>
                                                <span>(11) 157-00-22-11</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quote__btn d-none d-xl-inline-block">
                                        <a href="contact.html" className="ht_btn">
                                            <span>Get In Touch</span>
                                        </a>
                                    </div>
                                    <div className="hamburger-menu d-xl-none">
                                        <a className="round-menu" href="javascript:void(0);">
                                            <i className="far fa-bars"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}