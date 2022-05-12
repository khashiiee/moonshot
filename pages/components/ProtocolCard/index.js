import Image from "next/image";
import Card from "../Card";

function ProtocolCard({ item }) {
  const myLoader = ({ src, width, quality }) => {
    return src;
  };

  return (
    <Card>
      {item ? (
        <div>
          <div className="flex flex-wrap p-2">
            <Image
              src={item.logo_url}
              loader={myLoader}
              width={40}
              height={20}
              alt={"logo"}
            />
            <div>
              <div>{item.name}</div>
              <div className="text-slate-400">{item.site_url}</div>
            </div>
            <div className="text-violet-800">
              ${parseFloat(item.net_usd_value).toFixed(0)}
            </div>
          </div>
          <div></div>
          <div className="flex flex-wrap">
            <div className="border-2 rounded-xl border-violet-700 px-2 py-2 bg-violet-200 text-violet-700">
              Assets
            </div>
            <div className="px-4 py-2 ">
              ${parseFloat(item.asset_usd_value).toFixed(0)}
            </div>
            <div className="border-2 rounded-xl border-rose-700 px-2 py-2 bg-rose-200  text-rose-700">
              Debit
            </div>
            <div className="px-4 py-2">
              ${parseFloat(item.debt_usd_value).toFixed(0)}
            </div>
          </div>
        </div>
      ) : (
        <Skeleton width={100} count={5}></Skeleton>
      )}
    </Card>
  );
}

export default ProtocolCard;
