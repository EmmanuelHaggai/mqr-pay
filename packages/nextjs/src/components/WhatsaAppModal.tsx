import React, { useEffect, useState, useRef } from 'react';

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

const WhatsaAppModal = () => {

  const [customArg, setCustomArg] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [FinalphoneNumber, setFinalPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const SendData = useRef("");

  // Function to refresh the UI
  const refreshPage = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    $('#myQRModal').on('shown.bs.modal', function () {
      console.log("Modal open");

      // initialize phone number
      var input = document.querySelector("#phone_number_2") as HTMLInputElement | null;

      if (input) {
        var iti = window.intlTelInput(input, {
          formatOnDisplay: true,
          hiddenInput: "whatsapp_phone_number",
          initialCountry: "ke",
          placeholderNumberType: "MOBILE",
          // preferredCountries: ['ke', 'us', 'gb'],
          onlyCountries: ['ke'],
          utilsScript: "intl_phone_number/js/utils.js",
        });
      }

      // Set an ID for the hidden input after initialization
      const hiddenInput = document.querySelector("input[name='whatsapp_phone_number']");
      if (hiddenInput) {
        hiddenInput.id = "whatsapp_phone_number_id"; // Set your desired ID
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

  // Update customArg whenever phoneNumber or amount changes
  useEffect(() => {
      // update the UI
      console.log("customArg: ", SendData.current);
  }, [phoneNumber]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    // setCustomArg(`${FinalphoneNumber}-${address}-w`);

    // // Add form submission logic heres
    // console.log("Phone Number:", phoneNumber);
    // console.log("Amount:", amount);
    // console.log("customArg:", customArg);
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
            <p id="mqr_modal_info">Enter your WhatsApp phone number to securely link it to your smart wallet. </p>

            <form onSubmit={handleSubmit} id="whatsapp_phone_form">
              <div className="form-group">
                <label htmlFor="phone">Phone Number: <span id="phone_preview">E.g 0712345678</span></label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number_2"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => { setPhoneNumber(e.target.value); SendData.current = `${e.target.value}-${address}-w` }}
                  required
                />
              </div>

              <div>
                {address ? (
                  <TransactionWrapperWhatsApp address={address} customArg={SendData.current} />
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

export default WhatsaAppModal;