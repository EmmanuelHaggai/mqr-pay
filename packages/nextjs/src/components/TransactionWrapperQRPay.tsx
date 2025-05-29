"use client";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";
import type { Address, ContractFunctionParameters } from "viem";
import { BASE_CHAIN_ID, ABI, ContractAddress } from "../constants";

interface TransactionWrapperProps {
  payableAmount: string;
  toAddress: Address; 
}

export default function TransactionWrapperQRPay({ payableAmount, toAddress }: TransactionWrapperProps ) {

  // Check if payableAmount is a valid number and not an empty string
  let payableAmountInWei;
  if (payableAmount && !isNaN(parseFloat(payableAmount))) {
      // Convert Ether to Wei
      payableAmountInWei = BigInt(parseFloat(payableAmount) * 1e18).toString();
  } else {
      // Handle the case where payableAmount is invalid or empty
      payableAmountInWei = "0"; // or some other default value or error handling
  }

  const contracts = [
    {
      address: ContractAddress,
      abi: ABI,
      functionName: "forwardEther",
      args: [toAddress],
      value: payableAmountInWei, 
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log("Blockchain transaction initiated successfully, complete it via the prompt on your whatsapp.", response);

    const linkElement = document.getElementById('mqr_modal_info');
    if (linkElement) {
      linkElement.textContent = 'Blockchain transaction initiated successfully, complete it via the prompt on your WhatsApp.';
    }
  };

  return (
    <div>
      <Transaction
        capabilities={{
          paymasterService: {
            url: process.env.NEXT_PUBLIC_PAYMASTER_AND_BUNDLER_ENDPOINT  || 'https://api.developer.coinbase.com/rpc/v1/base/EXDVzcSr1kq9Vm2KBCKYr9_jbOC3N0Cf',
          },
        }}
        contracts={contracts}
        className=""
        chainId={BASE_CHAIN_ID}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TransactionButton className="mt-0 mr-auto ml-auto max-w-full text-[white]" />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
