import { useEffect, useState } from "react";
import AssetsTable from "../components/AssetsTable";
import Heading from "../components/UI/Heading/Heading";

const HomePage = () => {
    const [assets, setAssets] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.coincap.io/v2/assets?offset=${offset}&limit=10`)
            .then((response) => response.json())
            .then((data) => {
                const assets = data["data"];
                setAssets((val) => [...val, ...assets]);
            })
            .then(() => {
                setIsLoading(false);
            });
    }, [offset]);

    const loadMoreHandler = () => {
        setOffset((val) => val + 10);
    };

    return (
        <div
            className="container is-fluid pl-0 pr-0"
            style={{ marginTop: "4rem" }}
        >
            <Heading />
            <center className="pb-6 mt-3">
                <AssetsTable assets={assets} />
                <button
                    className={`button is-rounded is-link ${
                        isLoading ? "is-loading" : ""
                    }`}
                    onClick={loadMoreHandler}
                >
                    Load More
                </button>
            </center>
        </div>
    );
};

export default HomePage;
