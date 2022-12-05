import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailHeader from "../../components/UI/DetailHeader/DetailHeader";
import DetailLevel from "../../components/UI/DetailLevel/DetailLevel";

const AssetDetailPage = () => {
    const router = useRouter();
    const id = router.query.assetId;
    const [assetDetail, setAssetDetail] = useState();

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

    if (!assetDetail) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container-fluid mt-6 pt-4">
            <DetailHeader asset={assetDetail} />
            <DetailLevel high="1234" low="1234" average="1234" change="0.09" />
        </div>
    );
};

export default AssetDetailPage;
