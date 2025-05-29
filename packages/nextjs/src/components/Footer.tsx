'use client';

import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* BTC Footer Wrapper Start */}
            <div className="btc_footer_main_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="btc_footer_logo_left">
                                <a href="/">
                                    <img src="images/header/logo.png" alt="logo" />
                                </a>
                            </div>
                            <div className="btc_footer_logo_left">
                                <br />
                                <p>Instant Smart Wallet Top-Up with Mpesa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BTC Footer Wrapper End */}

            {/* BTC Bottom Footer Wrapper Start */}
            <div className="btc_bottom_footer_main_wrapper">
                <a 
                    href="javascript:void(0);" 
                    id="scroll" 
                    title="Scroll to Top" 
                    style={{ display: 'none' }} 
                    onClick={scrollToTop}
                >
                    <span className="fa fa-angle-double-up"></span>
                </a>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="text-center">
                                <p>© Copyright 2024 by MQR Pay. All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BTC Bottom Footer Wrapper End */}
        </>
    );
};

export default Footer;
