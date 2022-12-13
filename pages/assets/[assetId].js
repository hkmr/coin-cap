import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailHeader from "../../components/UI/DetailHeader/DetailHeader";
import DetailLevel from "../../components/UI/DetailLevel/DetailLevel";
import LineChart from "../../components/UI/Graphs/LineChart";

const AssetDetailPage = () => {
    const router = useRouter();
    const id = router.query.assetId;
    const [assetDetail, setAssetDetail] = useState();
    const [startTime, setStartTime] = useState(1);
    const [interval, setInterval] = useState("m30");

    useEffect(() => {
        if (id) {
            console.log("Fetching....");
            fetch(`https://api.coincap.io/v2/assets/${id}`)
                .then((response) => response.json())
                .then((result) => {
                    setAssetDetail(result["data"]);
                    console.log(result["data"]);
                });
        }
    }, [id]);

    const changeTimeAndInterval = (time, interval) => {
        setStartTime(time);
        setInterval(interval);
    };

    if (!assetDetail) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container-fluid mt-6 pt-4">
            <DetailHeader asset={assetDetail} />
            <DetailLevel high="1234" low="1234" average="1234" change="0.09" />
            <hr />
            <div className="buttons is-centered">
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(1, "m30")}
                    disabled={startTime === 1 ? true : false}
                >
                    1D
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(7, "h6")}
                    disabled={startTime === 7 ? true : false}
                >
                    1W
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(30, "d1")}
                    disabled={startTime === 30 ? true : false}
                >
                    1M
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(90, "d1")}
                    disabled={startTime === 90 ? true : false}
                >
                    3M
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(180, "d1")}
                    disabled={startTime === 180 ? true : false}
                >
                    6M
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(360, "d1")}
                    disabled={startTime === 360 ? true : false}
                >
                    1Y
                </button>
                <button
                    className="button is-info is-small"
                    onClick={() => changeTimeAndInterval(0, "d1")}
                    disabled={startTime === 0 ? true : false}
                >
                    All
                </button>
            </div>
            <LineChart assetId={id} startTime={startTime} interval={interval} />
        </div>
    );
};

export default AssetDetailPage;
