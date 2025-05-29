import React from 'react';

import LoginButton from '../components/LoginButton';

const Header = () => {
  return (
    <div className="gc_main_menu_wrapper">
      <div className="container-fluid">
        <div id="search_open" className="gc_search_box">
          <input type="text" placeholder="Search here" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-xs">
            <div className="gc_header_wrapper">
              <div className="gc_logo">
                <a href="/">
                  <img src="images/header/logo.png" alt="Logo" title="MQR Pay" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="header-area hidden-menu-bar stick" id="sticker">
              {/* mainmenu start */}
              <div className="gc_right_menu hidden-xs">
                <ul>
                  {/* <li className="btc_join_navi_btn"> */}
                    <LoginButton />
                  {/* </li> */}
                  
                </ul>
              </div>
              <div className="mainmenu hidden-xs">
                <ul>
                  <li className="gc_main_navigation parent active">
                    {/* <a href="/" className="gc_main_navigation">Home</a> */}
                  </li>
                </ul>
              </div>
              {/* mainmenu end */}
              {/* mobile menu area start */}
              <div className="rp_mobail_menu_main_wrapper visible-xs">
                <div className="row">
                  <div className="col-xs-6">
                    <div className="gc_logo">
                      <a href="/">
                        <img src="images/header/logo.png" alt="Logo" title="MQR Pay" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div id="toggle">
                      <svg> </svg>
                    </div>
                  </div>
                </div>
                <div id="sidebar">
                  <h1>
                    <a href="/">MQR Pay</a>
                  </h1>
                  <div id="toggle_close">&times;</div>
                  <div id="cssmenu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <LoginButton />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* mobile menu area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
