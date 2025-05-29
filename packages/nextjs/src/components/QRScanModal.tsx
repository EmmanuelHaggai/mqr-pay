import React, { useEffect, useState } from 'react';

import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';

import { BASE_CHAIN_ID, ABI, ContractAddress } from "../constants";


import TransactionWrapperWhatsApp from "src/components/TransactionWrapperWhatsApp";

declare global {
  interface Window {
    intlTelInput: (input: HTMLInputElement, options: any) => any;
  }
}

const QRScanModal = () => {

  // Function to refresh the UI
  const refreshPage = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    $('#myQRModal').on('shown.bs.modal', function () {
      console.log("Modal open");

      // initialize phone number
      // var input = document.querySelector("#phone_number_2");

      var input = document.querySelector("#phone_number_2") as HTMLInputElement | null;

      if (input) {
        var iti = window.intlTelInput(input, {
          formatOnDisplay: true,
          hiddenInput: "phone_number",
          initialCountry: "ke",
          placeholderNumberType: "MOBILE",
          preferredCountries: ['ke', 'us', 'gb'],
          utilsScript: "intl_phone_number/js/utils.js",
        });
      }

    });

    // Ensure jQuery is loaded and modal element exists
    $('#myQRModal').on('hidden.bs.modal', function () {
      refreshPage(); // Call the refresh function when the modal closes
    });

    // Cleanup function to avoid memory leaks
    return () => {
      $('#myQRModal').off('shown.bs.modal');
    };
  }, []);


  const { address } = useAccount();

  const [customArg, setCustomArg] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Update customArg whenever phoneNumber or amount changes
  useEffect(() => {
    setCustomArg(`${phoneNumber}-${address}-w`);

    console.log("Phone Number:", phoneNumber);
    console.log("Amount:", amount);
    console.log("customArg:", customArg);

  }, [phoneNumber, amount]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    setCustomArg(`${phoneNumber}-${address}-w`);
  };


  return (
    <div className="modal fade" tabIndex={-1} id="myQRModal" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Link Your Smart Wallet with WhatsApp</h4>
          </div>
          <div className="modal-body">
            <p id="mqr_modal_info">Enter your WhatsApp phone number to securely link it to your smart wallet.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number_2"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => { setPhoneNumber(e.target.value); setCustomArg(`${e.target.value}-${address}-w`); }}
                  required
                />
              </div>

              <div>
                {address ? (
                  <TransactionWrapperWhatsApp address={address} customArg={customArg} />
                ) : (
                  <WalletWrapper
                    className="max-w-full"
                    text="Sign in to transact"
                  />
                )}
              </div>
          
              {/* <button type="submit" className="btn btn-primary ">Submit</button> */}
            </form>
                    

          </div>


        </div>
      </div>
    </div>
    
  );
};

export default QRScanModal;
