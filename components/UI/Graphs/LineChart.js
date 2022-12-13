import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
};

const getUrl = (assetId, startTime, interval) => {
    if (startTime === 0) {
        return `https://api.coincap.io/v2/assets/${assetId}/history?interval=${interval}`;
    }

    var d = new Date();
    d.setDate(d.getDate() - startTime);
    const startMilliSeconds = Date.parse(d);
    const endMilliSeconds = Date.now();

    return `https://api.coincap.io/v2/assets/${assetId}/history?interval=${interval}&start=${startMilliSeconds}&end=${endMilliSeconds}`;
};

// const getLabel = (time, startTime) => {
//     switch (startTime) {
//         case 0:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//             });
//         case 7:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//             });
//         case 30:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//             });
//         case 90:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//                 month: "2-digit",
//             });
//         case 180:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//                 month: "2-digit",
//             });
//         case 360:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//                 month: "2-digit",
//             });
//         default:
//             return new Date(time).toLocaleTimeString("en-US", {
//                 hour12: true,
//                 day: "2-digit",
//                 month: "2-digit",
//                 year: "numeric",
//             });
//     }
// };

const LineChart = (props) => {
    const labels = [];
    const prices = [];

    const [values, setValues] = useState({
        labels,
        datasets: [
            {
                data: prices,
                label: "Price",
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    });

    const { assetId, startTime, interval } = props;

    useEffect(() => {
        const url = getUrl(assetId, startTime, interval);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                data["data"].map((val) => {
                    labels.push(
                        new Date(val["time"]).toLocaleTimeString("en-US", {
                            hour12: true,
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })
                    );
                    prices.push(Number(val["priceUsd"]).toFixed(0));
                });

                setValues((prev) => ({
                    ...prev,
                    labels,
                    datasets: [
                        {
                            label: "Price",
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                            data: prices,
                        },
                    ],
                }));
            });
    }, [startTime]);

    return (
        <div className="container">
            <Line options={options} data={values} />
        </div>
    );
};

export default LineChart;
