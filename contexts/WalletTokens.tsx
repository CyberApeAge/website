import { NextPage } from "next/types";
import React, { createContext, useEffect, useState } from "react";
import { WalletTokensContextData, WalletTokensContextProviderProps } from "./types";
import { Connection, PublicKey } from "@solana/web3.js";
import { AccountLayout } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { TokenData } from "../types";

const WalletTokensContext = createContext({} as WalletTokensContextData);

const getApeDetails = (id:string) => fetch(`/api/cyberapeage/${id}`)
    .then((res) => (res.status === 200 ? res.json() : null))


export const WalletTokensContextProvider: NextPage<WalletTokensContextProviderProps> = ({
  children,
}) => {
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();

  const [apeAmount, setApeAmount] = useState<number>(0);
  const [cyberAmount, setCyberAmount] = useState<number>(0);
  const [apes, setApes] = useState<TokenData[]>([])

  function checkTokensAmount() {
    console.log("checkTokensAmount");

    if (connected && publicKey) {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const APE_ADDRESS = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
      const APE_MINT = new PublicKey("E3RN9omoTNdqKXGj988X8JuCXwNZ6ZHXbfpaZ1nVZbrA");
      getApeDetails('').then((data:any)=> {
          const allApes = Object.values(data) as TokenData[]
          connection.getTokenAccountsByOwner(publicKey, {programId: APE_ADDRESS})
              .then(async (res) => {
                  let finalApeAmount: number = 0;
                  const apes = await Promise.all(res.value.map((e) => {
                      const accountInfo = AccountLayout.decode(e.account.data);
                      const mint = new PublicKey(accountInfo.mint);
                      if (mint.toString() === APE_MINT.toString()) {
                          finalApeAmount = parseInt(accountInfo.amount.toString()) / 1_000_000;
                      } else {
                          const foundApe = allApes.filter(ape=>ape.token === mint.toString())?.pop()
                          if (foundApe) {
                              return foundApe
                          }
                      }
                  }))
                  if (finalApeAmount > 0) setApeAmount(finalApeAmount);
                  if (apes.filter(Boolean).length) setApes(apes.filter(Boolean) as TokenData[])
              })
      })
    }
  }

  useEffect(checkTokensAmount, [connected, publicKey, connection]);

  return (
    <WalletTokensContext.Provider value={{ checkTokensAmount, apeAmount, cyberAmount, apes }}>
      {children}
    </WalletTokensContext.Provider>
  );
};

export default WalletTokensContext;
