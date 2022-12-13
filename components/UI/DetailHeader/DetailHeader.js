import Link from "next/link";
import Image from "next/image";

const DetailHeader = (props) => {
    return (
        <section className="hero is-info px-6">
            <div className="hero-body">
                <div className="is-flex is-align-content-space-evenly is-align-content-center">
                    <div className="is-flex-grow-3"></div>
                    <div className="is-flex-grow-4">
                        <Image
                            src={`https://assets.coincap.io/assets/icons/${props.asset.symbol.toLowerCase()}@2x.png`}
                            height="80"
                            width="80"
                            alt={props.asset.symbol}
                        />
                        <p className="title is-2">{props.asset.name}</p>
                        <div className="container">
                            <span className="title is-4 mr-3">
                                ${Number(props.asset.priceUsd).toFixed(2)}
                            </span>
                            <span className="title is-4 has-text-danger">
                                1.86%
                                <span className="icon">
                                    <i className="fas fa-home"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="is-flex-grow-2">
                        <p className="title is-5">Market Cap</p>
                        <p className="title is-5">
                            ${Number(props.asset.marketCapUsd).toFixed(2)}
                        </p>
                        <Link href="/" className="button is-warning is-rounded">
                            Website
                        </Link>
                    </div>
                    <div className="is-flex-grow-2">
                        <p className="title is-5">Volume(24 Hr)</p>
                        <p className="title is-5">$7.55b</p>
                        <Link
                            href={props.asset.explorer}
                            target="_blank"
                            className="button is-warning is-rounded"
                        >
                            Explorer
                        </Link>
                    </div>
                    <div className="is-flex-grow-2">
                        <p className="title is-5">Supply</p>
                        <p className="title is-5">
                            ${Number(props.asset.supply).toFixed(2)}
                        </p>
                    </div>
                    <div className="is-flex-grow-2"></div>
                </div>
            </div>
        </section>
    );
};

export default DetailHeader;
