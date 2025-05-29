"use client";
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";

import React, { ReactNode } from 'react';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};


interface WalletButtonProps {
  className: string; 
}

// Define the interface for the props
interface WalletDropdownLinkProps {
  icon: string;
  children?: ReactNode; // Optional children prop to allow buttons or other components
}

const WalletDropdownLink2: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#myModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic"><path fill="#aed580" d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z"/><path fill="#aed580" d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z"/><path fill="#fff" fill-rule="evenodd" d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z" clip-rule="evenodd"/><path fill="#9b2310" fill-rule="evenodd" d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z" clip-rule="evenodd"/><path fill="#e60023" fill-rule="evenodd" d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z" clip-rule="evenodd"/></svg>
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
            Top up via Mpesa
          </span>
        </span>
      </button>
      </>
  );
};

const WalletDropdownLink_QR_send: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#SendQRModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="18.000000pt" height="18.000000pt" viewBox="0 0 18.000000 18.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M14 155 c-3 -8 -4 -20 -1 -27 3 -7 6 -3 6 9 1 14 9 23 24 26 l22 4
          -23 2 c-12 0 -25 -6 -28 -14z"/>
          <path d="M137 164 c12 -3 24 -14 26 -25 4 -15 4 -14 3 3 -1 17 -8 23 -26 25
          -21 1 -21 0 -3 -3z"/>
          <path d="M75 140 c4 -14 1 -22 -12 -27 -18 -6 -33 -22 -33 -34 0 -4 11 -6 25
          -6 14 0 25 5 25 13 0 11 5 11 26 2 l26 -12 -21 -14 c-27 -18 -27 -35 -1 -27
          14 5 20 2 20 -10 0 -10 7 -15 17 -13 24 4 28 35 6 41 -17 4 -17 5 0 6 21 1 23
          31 2 31 -8 0 -15 5 -15 10 0 6 -12 10 -27 10 -21 0 -24 3 -14 9 12 8 12 12 2
          25 -19 22 -34 20 -26 -4z"/>
          <path d="M30 140 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
          -10 -4 -10 -10z"/>
          <path d="M130 140 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
          -10 -4 -10 -10z"/>
          <path d="M14 35 c1 -13 8 -20 24 -21 17 -1 18 -1 3 3 -11 2 -22 12 -24 21 -3
          12 -4 11 -3 -3z"/>
          <path d="M30 40 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10
          -4 -10 -10z"/>
          </g>
          </svg>
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
            Send via QR code
          </span>
        </span>
      </button>
      </>
  );
};


const WalletDropdownLink_WhatsApp: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#myQRModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
            <path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"></path><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"></path><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"></path><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"></path>
          </svg>
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
            Connect with WhatsApp
          </span>
        </span>
      </button>
      </>
  );
};


const WalletDropdownLink_Swap: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#swapModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
          
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="48.000000pt" height="48.000000pt" viewBox="0 0 48.000000 48.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M78 430 c-4 -8 -9 -32 -13 -52 l-6 -38 51 0 c55 0 69 17 18 22 l-33
          3 35 23 c66 42 139 41 204 -3 19 -13 38 -20 41 -15 7 12 -41 44 -89 60 -47 15
          -104 9 -156 -19 l-39 -20 -3 27 c-3 18 -6 22 -10 12z"/>
          <path d="M380 298 c-24 -40 -27 -74 -3 -40 22 32 33 27 33 -15 -1 -74 -56
          -154 -117 -169 -12 -4 -23 -11 -23 -16 0 -16 51 1 86 27 43 33 68 89 69 152 0
          51 7 65 20 43 3 -5 14 -10 23 -10 12 0 7 9 -18 30 -19 16 -38 30 -43 30 -4 0
          -16 -15 -27 -32z"/>
          <path d="M36 284 c-27 -71 28 -187 104 -220 l41 -18 -28 -15 c-15 -8 -23 -16
          -17 -18 11 -4 84 24 84 32 0 18 -36 75 -48 75 -12 0 -11 -4 2 -25 22 -33 2
          -34 -45 -2 -49 32 -81 100 -76 160 4 46 -5 63 -17 31z"/>
          </g>
          </svg>
          
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
          Token Swap
          </span>
        </span>
      </button>
      </>
  );
};

export default function WalletWrapper({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  return (
    <>
      <Wallet>
        <ConnectWallet
          withWalletAggregator={withWalletAggregator}
          text={text}
          className={className}
        >
          <Avatar />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity hasCopyAddressOnClick={true}>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink2 icon="wallet"> </WalletDropdownLink2>
          <WalletDropdownLink_WhatsApp icon="wallet"> </WalletDropdownLink_WhatsApp>
          <WalletDropdownLink_QR_send icon="wallet"> </WalletDropdownLink_QR_send>
          <WalletDropdownLink_Swap icon="wallet"> </WalletDropdownLink_Swap>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </>
  );
}
