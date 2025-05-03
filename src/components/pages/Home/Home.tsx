import { Fragment, useState } from "react";
import "./home.scss";

function Home(): React.JSX.Element {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <h1 className="home-title p-3">Home</h1>
            <h1>count: {count}</h1>
            <button
                type="button"
                className="btn btn-primary text-cyan-500 hover:btn-red"
                onClick={() => setCount((pre) => pre + 1)}
            >
                Primary
            </button>
            <button type="button" className="btn btn-secondary">
                Secondary
            </button>
            <button type="button" className="btn btn-success">
                Success
            </button>
            <button type="button" className="btn btn-danger">
                Danger
            </button>
            <button type="button" className="btn btn-warning">
                Warning
            </button>
            <button type="button" className="btn btn-info">
                Info
            </button>
            <button type="button" className="btn btn-light">
                Light
            </button>
            <button type="button" className="btn btn-dark">
                Dark
            </button>

            <button type="button" className="btn btn-link">
                Link
            </button>
            <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://fakeimg.pl/640x350" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fakeimg.pl/640x350" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fakeimg.pl/640x350" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    );
}

export default Home;
