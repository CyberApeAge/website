import {useContext} from "react";
import WalletTokensContext from "../../contexts/WalletTokens";
import {useWallet} from "@solana/wallet-adapter-react";
import {NextPage} from "next/types";
import {HubContainerProps} from "./types";
import {HubInner} from "./styles";


const Hub: NextPage<HubContainerProps> = () => {
    const { apeAmount, cyberAmount } = useContext(WalletTokensContext);
    const { connected, publicKey } = useWallet();


    return <HubInner/>
}

export default Hub;
