import Logo from "../Logo";
import WalletSearchBar from "../WalletSearchBar";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import Button from "../Button";

function SideBar({ setWalletAddress, selectedOption, setSelectedOption }) {
  const { data, error } = useSWR(`https://openapi.debank.com/v1/chain/list`);

  const [searchValue, setSearchValue] = useState("");

  const options = [];

  if (data) {
    data.map((data) => {
      options.push({ label: data.name, value: data.id });
      console.log("name : "+data.name+" value : "+data.id);
    });
  }

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white", width: 250 }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "white",
        color: "black",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <div className="basis-1/4 min-h-screen bg-violet-200 drop-shadow-md">
      <Logo />
      <div className="px-10 pt-10"> Your Wallet Address</div>
      <WalletSearchBar
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <div>
        <Select
          defaultValue={options[0]}
          label="Single select"
          options={options}
          value={options.filter(function (option) {
            return option.value === selectedOption;
          })}
          styles={colourStyles}
          className="pl-10 pt-5"
          onChange={handleTypeSelect}
        />
      </div>
      <div className="px-10 pt-10">
        <Button onClick={() => setWalletAddress(searchValue)}>
          {"Show my balances"}
          {/* <div class="rounded-full bg-white"> HI </div> */}

        </Button>
      </div>
    </div>
  );
}

export default SideBar;
