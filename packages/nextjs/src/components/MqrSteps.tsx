"use client";

// BtcSteps.js
import React from "react";
import TransactionWrapper from "src/components/TransactionWrapper";
import WalletWrapper from "src/components/WalletWrapper";
import { ONCHAINKIT_LINK } from "src/links";
import OnchainkitSvg from "src/svg/OnchainkitSvg";
import { useAccount } from "wagmi";



import LoginButton from '../components/LoginButton';

const MqrSteps = () => {
    const { address } = useAccount();
    

  return (
    <div section-scroll="1" className="wd_scroll_wrap">

      <div
        className="btc_steps_main_wrapper"
        data-parallax="scroll"
        data-image-src="images/content/service_bg.jpg"
      >

       

        <div className="container">

        <div className="visible-xs-block text-center">
            <button>
            <LoginButton />
            </button>
            <br /> <br />
        </div>

          <div className="row">

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="btc_steps_heading_wrapper">
                <p>Get Started with MQR Pay</p>

                <h1>Effortlessly Fund Your Wallet with Mpesa</h1>
                <span>#</span>
                <h5>
                MQR Pay makes managing your finances easier, faster, and more secure by seamlessly integrating with Mpesa. 
                Create a smart wallet, fund it with KSH, and instantly receive Ethereum (ETH) - all in just a few steps. 
                Here's how to get started:
                </h5>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <ul className="nav nav-pills">
                <li className="active">
                  <a data-toggle="pill" href="#home">
                    How to Use MQR Pay
                  </a>
                </li>
                {/* <li>
                  <a data-toggle="pill" href="#menu1">
                    How to Accept Payments
                  </a>
                </li> */}

                {/* <li>
                  {address ? (
                    <TransactionWrapper address={address} />
                  ) : (
                    <WalletWrapper
                      className="w-[450px] max-w-full"
                      text="Sign in to transact"
                    />
                  )}
                </li> */}

              </ul>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                  <div className="row btc_steps_wrappers">
                    {/* Step 1 */}
                    {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper1">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-user"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Sign Up</a>
                          </h2>
                          <p>
                            Begin by signing up on WhatsApp with MQR Pay. We'll
                            guide you through setting up your account quickly
                            and easily.
                          </p>
                          <span>1</span>
                        </div>
                      </div>
                    </div> */}

                    {/* Step 2 */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper2">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-wallet"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Create Your Smart Wallet</a>
                          </h2>
                          <p>
                          Use your device's passkey to generate a secure wallet, and you'll be logged in automatically.
                          </p>
                          <span>1</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper3">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-coins"></i>
                            {/* flaticon-coins flaticon-money-1 */}
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Fund with Mpesa</a>
                          </h2>
                          <p>
                          Head to your profile and click "Top up via Mpesa." Enter your phone number and the amount you wish to top up.
                          </p>
                          
                          <span>2</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper4">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-user"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Authenticate and Top Up</a>
                          </h2>
                          <p>
                          Authenticate the transaction via your smart wallet passkey and Mpesa, and instantly receive the ETH equivalent of the KSH amount.
                          </p>
                          
                          <span>3</span>
                        </div>
                      </div>
                    </div>

                    <div className="btc_steps_bottom_line_wrapper"></div>
                  </div>
                </div>

                <div id="menu1" className="tab-pane fade">
                  <div className="row btc_steps_wrappers">
                    {/* Step 1 */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper1">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-user"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Get Verified</a>
                          </h2>
                          <p>
                            Complete the verification process to start accepting
                            payments through MQR Pay. It's quick and secure.
                          </p>
                          
                          <span>1</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper2">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-wallet"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Set Up Payment Methods</a>
                          </h2>
                          <p>
                            Configure the payment methods you want to accept,
                            including mobile money, cryptocurrency, and more.
                          </p>
                          
                          <span>2</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper3">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-money-1"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Receive Payments</a>
                          </h2>
                          <p>
                            Start accepting payments from your customers
                            directly through WhatsApp, leveraging MQR Pay's
                            secure platform.
                          </p>
                          
                          <span>3</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="btc_steps_main_box_wrapper btc_steps_main_box_wrapper4">
                        <div className="btc_step_icon_wrapper">
                          <div className="btc_step_hover_effect">
                            <i className="flaticon-coins"></i>
                            <div className="btc_step_overlay"></div>
                          </div>
                        </div>
                        <div className="btc_step_icon_cont_wrapper">
                          <h2>
                            <a href="#">Manage Transactions</a>
                          </h2>
                          <p>
                            Easily track and manage all your received payments
                            through a user-friendly interface within WhatsApp.
                          </p>
                          
                          <span>4</span>
                        </div>
                      </div>
                    </div>

                    <div className="btc_steps_bottom_line_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MqrSteps;
