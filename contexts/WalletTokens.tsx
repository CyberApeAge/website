import { NextPage } from "next/types";
import React, { createContext, useEffect, useState } from "react";
import { WalletTokensContextData, WalletTokensContextProviderProps } from "./types";
import { Connection, PublicKey } from "@solana/web3.js";
import { AccountLayout } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const WalletTokensContext = createContext({} as WalletTokensContextData);

export const WalletTokensContextProvider: NextPage<WalletTokensContextProviderProps> = ({
  children,
}) => {
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();

  const [apeAmount, setApeAmount] = useState<number>(0);
  const [cyberAmount, setCyberAmount] = useState<number>(0);

  function checkTokensAmount() {
    console.log("checkTokensAmount");

    if (connected && publicKey) {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const APE_ADDRESS = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
      const APE_MINT = new PublicKey("E3RN9omoTNdqKXGj988X8JuCXwNZ6ZHXbfpaZ1nVZbrA");

      connection
        .getTokenAccountsByOwner(publicKey, { programId: APE_ADDRESS })
        .then((res) => {
          let finalApeAmount: number = 0;

          res.value.forEach((e) => {
            const accountInfo = AccountLayout.decode(e.account.data);
            const mint = new PublicKey(accountInfo.mint);

            if (mint.toString() === APE_MINT.toString()) {
              finalApeAmount = parseInt(accountInfo.amount.toString()) / 1_000_000;
            }
          });

          if (finalApeAmount > 0) setApeAmount(finalApeAmount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(checkTokensAmount, [connected, publicKey, connection]);

  return (
    <WalletTokensContext.Provider value={{ checkTokensAmount, apeAmount, cyberAmount }}>
      {children}
    </WalletTokensContext.Provider>
  );
};

export default WalletTokensContext;
