import React, { useEffect, useState } from 'react';

import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';

import { BASE_CHAIN_ID, ABI, ContractAddress } from "../constants";

declare const startCamera: () => void;
declare const closeCamera: () => void;

import TransactionWrapperQRPay from "src/components/TransactionWrapperQRPay";

declare global {
  interface Window {
    intlTelInput: (input: HTMLInputElement, options: any) => any;
  }
}

declare global {
  interface Window {
    setToAddress?: (address: `0x${string}`) => void;
  }
}

// import $ from 'jquery'; // Ensure jQuery is imported
const SendQRModal = () => {

  // Function to refresh the UI
  const refreshPage = () => {
    window.location.reload(); 
  };

  function formatAddress(address: string): `0x${string}` {
    return address.startsWith("0x") ? (address as `0x${string}`) : (`0x${address}` as `0x${string}`);
  }

  const handleStartCamera = () => {
    startCamera();

    const scanForAddress = document.getElementById("scan_for_address");
    const qrError = document.getElementById("qr_error");
    const stage2 = document.getElementById("stage2");

    if (scanForAddress) {
      (scanForAddress as HTMLElement).style.display = "block";
    }
    if (qrError) {
      (qrError as HTMLElement).style.display = "none";
    }
    if (stage2) {
      (stage2 as HTMLElement).style.display = "none";
    }
  };

  useEffect(() => {
    $('#SendQRModal').on('shown.bs.modal', function () {
      console.log("Modal open");

      console.log("Opening camera");
      startCamera();

      const scanForAddress = document.getElementById("scan_for_address");
      const qrError = document.getElementById("qr_error");
      const stage2 = document.getElementById("stage2");

      if (scanForAddress) {
        scanForAddress.style.display = "block";
      }
      if (qrError) {
        qrError.style.display = "none";
      }
      if (stage2) {
        stage2.style.display = "none";
      }

      // //test alert
      // const linkElement = document.getElementById('modal_info');
      // if (linkElement) {
      //   linkElement.textContent = 'Blockchain transaction initiated successfully, complete it via the prompt on your phone.';
      // }

      // //back button clicked
      // const back_button = document.getElementById('scanAgain');
      // back_button.addEventListener('click', function() {
      //     revertCamera();
      // });

    });

    // Ensure jQuery is loaded and modal element exists
    $('#SendQRModal').on('hidden.bs.modal', function () {
      refreshPage(); // Call the refresh function when the modal closes
      console.log('/clossing the camera.');
      closeCamera();
    });

    // Cleanup function to avoid memory leaks
    return () => {
      $('#SendQRModal').off('shown.bs.modal');
    };
  }, []);


  const { address } = useAccount();

  const [payableAmount, setPayableAmount] = useState("0");
  const [toAddress, setToAddress] = useState("");

  // Define the function to set the address, and expose it globally
  const setAddress = (address: string) => {
    setToAddress(address);
  };

  useEffect(() => {
    // Expose the function to the global `window` object
    window.setToAddress = setAddress;
    return () => {
      delete window.setToAddress; // Clean up on component unmount
    };
  }, []);

  // Update customArg whenever phoneNumber or amount changes
  useEffect(() => {
    console.log("payableAmount:", payableAmount);
    console.log("toAddress:", toAddress);

  }, [payableAmount]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // // Add form submission logic here
    // console.log("Phone Number:", phoneNumber);
    // console.log("Amount:", amount);
    // console.log("customArg:", customArg);
  };


  return (
    <div className="modal fade" tabIndex={-1} id="SendQRModal" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Pay to QR Code </h4>
          </div>
          <div className="modal-body">
            <p id="mqr_modal_info">Please place the QR code in front of the camera to begin scanning. Ensure the code is clear and centered within the frame for accurate reading.</p>

            <div id="scan_for_address">
                <div id="result" className="text-center" style={{ display: 'block' }}></div>
                <div id="send_qr_feedback" className="text-center" style={{ display: 'block' }}></div>

                <div id="qr_supported" className="text-center" style={{ display: 'block' }}>
                    <div id="outdiv" style={{ width: '100%', height: 'auto' }}>
                        <video
                            id="v_test"
                            className="img-responsive img-thumbnail"
                            style={{ margin: 'auto' }}
                            width="600"
                            height="600"
                            autoPlay
                            controls
                        ></video>
                    </div>

                    <canvas
                        id="qr-canvas"
                        style={{ display: 'none' }}
                        width="1600"
                        height="1200"
                    ></canvas>
                </div>

                <div className="modal-footer text-center">
                    <button type="button" className="btn btn-default btn-lg pull-left" data-dismiss="modal">
                        Close
                    </button>
                </div>
                
            </div>

            <div id="qr_error" style={{ display: 'none' }}>
              <div className="alert alert-danger text-center" role="alert">
                <p>Invalid QR Code. Please try again.</p>
              </div>

              <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-secondary me-2" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary pull-right" onClick={handleStartCamera}>
                    Restart Camera
                  </button>
                </div>
            </div>

            

            <div id="stage2" style={{ display: 'none' }}>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="hidden" id="qr_address" name="qr_address" />
                </div>

                <div className="form-group">
                  <label>Address: <strong id="qr_address_disp"> - </strong></label>
                </div>
          
                <div className="form-group">
                  <label htmlFor="amount">Amount: (ETH)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="QR_Send_amount"
                    placeholder="Enter amount (ETH)"
                    value={payableAmount}
                    onChange={(e) => { setPayableAmount(e.target.value); }}
                    required
                  />
                </div>

                <div>
                  {address ? (
                    <TransactionWrapperQRPay 
                      payableAmount={payableAmount} 
                      toAddress={formatAddress(toAddress)} 
                    />
                  ) : (
                    <WalletWrapper
                      className="max-w-full"
                      text="Sign in to transact"
                    />
                  )}
                </div>

              </form>
            </div>

                    

          </div>


        </div>
      </div>
    </div>
    
  );
};

export default SendQRModal;
