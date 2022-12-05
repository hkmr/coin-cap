const DetailLevel = (props) => {
    return (
        <div className="container level mt-4">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">HIGH</p>
                    <p className="title">${props.high}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">LOW</p>
                    <p className="title">${props.low}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">AVERAGE</p>
                    <p className="title">${props.average}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">CHANGE</p>
                    <p className="title">{props.change}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailLevel;
