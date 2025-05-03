import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertTriangleSVG from "@/components/atoms/AlertTriangleSVG";
import "./error-boundary-fallback.scss";
// types
import type { MouseEvent } from "react";

function ErrorBoundaryFallback(): React.JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    function backToHome(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        navigate("/");
        window.location.reload();
    }
    function reloadPage() {
        window.location.reload();
    }
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center p-4">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <div className="d-flex mb-4 justify-content-center">
                        <AlertTriangleSVG className="error-boundary-fallback__icon text-danger" />
                    </div>
                    <h5 className="card-title fs-4 fw-semibold text-center mb-6">出錯了</h5>
                    <p className="card-text text-center">應用程式發生了意外錯誤，請嘗試重新載入或返回首頁。</p>
                    <p className="text-center">錯誤頁面: {location.pathname}</p>
                    <div className="d-flex justify-content-center gap-4">
                        <Link to="/" onClick={backToHome} className="btn btn-primary">
                            返回首頁
                        </Link>
                        <button onClick={reloadPage} className="btn btn-secondary">
                            重新載入
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorBoundaryFallback;
