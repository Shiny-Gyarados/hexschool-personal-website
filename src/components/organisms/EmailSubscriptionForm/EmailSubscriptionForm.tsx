import Title from "@/components/atoms/Title";

import "./email-subscription-form.scss";

function EmailSubscriptionForm() {
    return (
        <section className="container-fluid">
            <div className="email-subscription-form row">
                <div className="col-12 col-md-6 px-0">
                    <div className="email-subscription-form__avatar w-100 h-100"></div>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="email-subscription-form__subscription">
                        <div className="email-subscription-form__subscription-content">
                            <Title className="mb-4">訂閱電子報</Title>
                            <p className="email-subscription-form__subscription-description fz-4 fw-medium mb-6">
                                立即訂閱，搶先掌握
                                <strong>前端 x 職涯</strong>
                                的獨家資訊！
                            </p>
                            <form
                                className="email-subscription-form__form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="請輸入您的大名"
                                    className="fz-4 mb-2 w-100"
                                    autoComplete="username"
                                />
                                <input
                                    type="email"
                                    placeholder="請輸入您的電子信箱"
                                    className="fz-4 mb-6 w-100"
                                    autoComplete="email"
                                />
                                <button type="submit" className="fz-4 px-4 py-2">
                                    啟動訂閱
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmailSubscriptionForm;
