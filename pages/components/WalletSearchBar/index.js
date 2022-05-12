import Input from "../Input";

function WalletSearchBar({ value, onChange }) {

  return (
    <div className="flex pl-10 my-1">
      <Input
        type="text"
        placeholder="Enter your wallet address"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default WalletSearchBar;
