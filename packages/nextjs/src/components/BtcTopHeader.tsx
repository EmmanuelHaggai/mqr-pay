const BtcTopHeader = () => {
    return (
      <div className="btc_top_header_main_wrapper">
        <div className="container-fluid">
          <div className="btc_left_top_header_wrapper">
            <p className="btc_topheader_welcome_pera">
              Welcome to MQR Pay - The Future of Finance
            </p>
            <div id="ticker_window">
              <div id="day_and_time">
                <ul id="ticker"></ul>
              </div>
            </div>
          </div>
          <div className="btc_right_top_header_wrapper">
            <ul>
              <li className="btc_topheader_welcome_pera"></li>
              <li></li>
              <li>
                <p>
                  <i className="flaticon-internet"></i>
                  <span>
                    English <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </p>
                <div className="ss_opener">
                  <span> English</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default BtcTopHeader;
  