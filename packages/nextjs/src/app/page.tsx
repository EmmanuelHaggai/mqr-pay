'use client';

import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
// import SignupButton from '../components/SignupButton';


import BtcTopHeader from '../components/BtcTopHeader';

import Header from '../components/Header';

import Footer from 'src/components/Footer';

import QRModal from 'src/components/QRModal';

import WhatsaAppModal from 'src/components/WhatsaAppModal';

import MqrSteps from 'src/components/MqrSteps';

import SendQRModal from 'src/components/SendQRModal';

import SwapModal from 'src/components/SwapModal';


export default function Page() {
  const { address } = useAccount();

  return (
    <>
      <Header />

      <MqrSteps />

      <QRModal />

      <WhatsaAppModal /> 

      <SendQRModal /> 

      <SwapModal /> 

      <Footer />
      
    </>
  );
}

