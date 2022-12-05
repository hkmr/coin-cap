import Image from "next/image";
import Link from "next/link";

const AssetsTable = (props) => {
    return (
        <div className="table-container">
            <table className="table is-striped is-hoverable is-bordered">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>MarketCap</th>
                        <th>VWAP (24Hr)</th>
                        <th>Supply</th>
                        <th>Volume (24Hr)</th>
                        <th>Change (24Hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.assets.map((asset, index) => {
                        const change = Number(asset.changePercent24Hr).toFixed(
                            2
                        );
                        const symbol = String(asset.symbol).toLowerCase();
                        return (
                            <tr key={asset.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link href={`/assets/${asset.id}`}>
                                        <span style={{ margin: "10px" }}>
                                            <Image
                                                src={`https://assets.coincap.io/assets/icons/${symbol}@2x.png`}
                                                alt={asset.name}
                                                height="25"
                                                width="25"
                                            />
                                        </span>
                                        {asset.name}
                                    </Link>
                                </td>
                                <td>{Number(asset.priceUsd).toFixed(2)}</td>
                                <td>{Number(asset.marketCapUsd).toFixed(2)}</td>
                                <td>{asset.vwap24Hr}</td>
                                <td>{Number(asset.supply).toFixed(2)}</td>
                                <td>{asset.volumeUsd24Hr}</td>
                                <td
                                    className={
                                        change < 0
                                            ? "has-text-danger"
                                            : change > 0
                                            ? "has-text-success"
                                            : ""
                                    }
                                >
                                    {change}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AssetsTable;
