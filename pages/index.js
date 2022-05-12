import { useState } from "react";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const [selectedOption, setSelectedOption] = useState("none");


  return (
    <div className="flex items-stretch ">
      <SideBar
        setWalletAddress={setWalletAddress}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <MainContainer walletAddress={walletAddress} selectedOption={selectedOption} />
    </div>
  );
}
