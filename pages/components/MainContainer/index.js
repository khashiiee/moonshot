import Image from "next/image";
import useSWR from "swr";
import ProtocolCard from "../ProtocolCard";
import Skeleton from "react-loading-skeleton";

function MainContainer({ walletAddress, selectedOption }) {
  if (walletAddress) {
    const { data, error } = useSWR(
      `https://openapi.debank.com/v1/user/token_list?id=` +
        walletAddress +
        `&chain_id=` +
        selectedOption +
        `&is_all=false`
    );

    const { data: cardData, error: cardDataError } = useSWR(
      `https://openapi.debank.com/v1/user/simple_protocol_list?id=` +
        walletAddress +
        `&chain_id=` +
        selectedOption
    );

    console.log("helloo" + cardData);

    const myLoader = ({ src, width, quality }) => {
      return src;
    };

    return (
      <div className="basis-3/4 min-h-screen bg-violet-100">
        {data ? (
          <div className="basis-3/4 min-h-screen flex-initial bg-violet-100 pl-10">
            <div className="flex flex-auto py-10">
              <div className="overflow-x-auto sm:-mx-2 lg:-mx-4 bg-white  min-w-full px-5 rounded-lg">
                <div className="py-2 inline-block min-w-full sm:px-2 lg:px-4 ">
                  <div className="overflow-hidden rounded-lg">
                    <table className="min-w-full text-center">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-400 px-1 py-2 text-left"
                          >
                            Assets
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-400 px-1 py-2 text-left"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-400 px-1 py-2 text-left"
                          >
                            Balance
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-400 px-1 py-2 text-right"
                          >
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, idx) => (
                          <tr className="bg-white border-b" key={idx}>
                            <td className="text-sm text-gray-900 px-1 py-2 whitespace-nowrap text-left">
                              <Image
                                src={item.logo_url}
                                loader={myLoader}
                                width={20}
                                height={20}
                                alt={"logo"}
                              />
                              {item.optimized_symbol}
                            </td>
                            <td className="text-sm text-gray-900 px-1 py-2 whitespace-nowrap text-left">
                              {parseFloat(item.price).toFixed(2)}
                            </td>
                            <td className="text-sm text-gray-900 px-1 py-2 whitespace-nowrap text-left">
                              {parseFloat(item.amount).toFixed(4)}
                            </td>
                            <td className="text-sm text-gray-900 px-1 py-2 whitespace-nowrap text-right">
                              {(
                                parseFloat(item.price).toFixed(2) *
                                parseFloat(item.amount).toFixed(4)
                              ).toFixed(4)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {cardData ? (
                <div className="flex flex-wrap ">
                  {cardData.map((item, idx) => (
                    <div className="p-5" key={idx}>
                      <ProtocolCard item={item}></ProtocolCard>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <Skeleton width={100} count={5}></Skeleton>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <Skeleton width={100} count={10}></Skeleton>
          </div>
        )}
      </div>
    );
  }
}

export default MainContainer;
