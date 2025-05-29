import React, { useEffect, useState } from 'react';

import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';

import { BASE_CHAIN_ID, ABI, ContractAddress } from "../constants";

declare global {
  interface Window {
    intlTelInput: (input: HTMLInputElement, options: any) => any;
  }
}


// import $ from 'jquery'; // Ensure jQuery is imported
const QRModal = () => {

  // Function to refresh the UI
  const refreshPage = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    $('#myModal').on('shown.bs.modal', function () {
      console.log("Modal open");

      // initialize phone number
      // var input = document.querySelector("#phone_number");

      var input = document.querySelector("#phone_number") as HTMLInputElement | null;

      if (input) {
        var iti = window.intlTelInput(input, {
          formatOnDisplay: true,
          hiddenInput: "phone_number",
          initialCountry: "ke",
          placeholderNumberType: "MOBILE",
          // preferredCountries: ['ke', 'us', 'gb'],
          onlyCountries: ['ke'],
          utilsScript: "intl_phone_number/js/utils.js",
        });
      }

      // //test alert
      // const linkElement = document.getElementById('modal_info');
      // if (linkElement) {
      //   linkElement.textContent = 'Blockchain transaction initiated successfully, complete it via the prompt on your phone.';
      // }

    });

    // Ensure jQuery is loaded and modal element exists
    $('#myModal').on('hidden.bs.modal', function () {
      refreshPage(); // Call the refresh function when the modal closes
    });

    // Cleanup function to avoid memory leaks
    return () => {
      $('#myModal').off('shown.bs.modal');
    };
  }, []);


  const { address } = useAccount();

  const [customArg, setCustomArg] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Update customArg whenever phoneNumber or amount changes
  useEffect(() => {
    setCustomArg(`${phoneNumber}-${address}-${amount}`);

    console.log("Phone Number:", phoneNumber);
    console.log("Amount:", amount);
    console.log("customArg:", customArg);

  }, [phoneNumber, amount]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    setCustomArg(`${phoneNumber}-${address}-${amount}`);

    // // Add form submission logic here
    // console.log("Phone Number:", phoneNumber);
    // console.log("Amount:", amount);
    // console.log("customArg:", customArg);
  };


  return (
    <div className="modal fade" tabIndex={-1} id="myModal" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Top up via M-Pesa</h4>
          </div>
          <div className="modal-body">
            <p id="modal_info">Please enter your mpesa phone number and the amount of ksh to top up with.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Phone Number: E.g 0712345678</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => { setPhoneNumber(e.target.value); setCustomArg(`${e.target.value}-${address}-${amount}`); }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount: </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  placeholder="Enter amount (atleast Ksh 10)"
                  value={amount}
                  onChange={(e) => { setAmount(e.target.value); setCustomArg(`${phoneNumber}-${address}-${e.target.value}`); }}
                  required
                />
              </div>


              <div>
                {address ? (
                  <TransactionWrapper address={address} customArg={customArg} />
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

export default QRModal;
