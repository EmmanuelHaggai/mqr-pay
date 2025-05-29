import React, { useEffect, useState } from 'react';

import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';

import { BASE_CHAIN_ID, ABI, ContractAddress } from "../constants";


import SwapComponents from 'src/components/Swap';


// import $ from 'jquery'; // Ensure jQuery is imported
const SwapModal = () => {

  // Function to refresh the UI
  const refreshPage = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    $('#swapModal').on('shown.bs.modal', function () {


    });

    // Ensure jQuery is loaded and modal element exists
    $('#swapModal').on('hidden.bs.modal', function () {
      refreshPage(); // Call the refresh function when the modal closes
    });

    // Cleanup function to avoid memory leaks
    return () => {
      $('#swapModal').off('shown.bs.modal');
    };
  }, []);


  const { address } = useAccount();

  return (
    <div className="modal fade" tabIndex={-1} id="swapModal" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Convert Your Tokens</h4>
          </div>
          <div className="modal-body">


              <SwapComponents />
           
          </div>


        </div>
      </div>
    </div>
    
  );
};

export default SwapModal;
