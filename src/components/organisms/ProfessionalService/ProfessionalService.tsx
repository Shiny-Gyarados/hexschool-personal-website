import { BASE_NAME } from "@/configs/global_configs";
import "./professional-service.scss";

const professionalServiceDatas = [
    {
        id: 1,
        imgSrc: `${BASE_NAME}/resume-checking.png`,
        imgAlt: "履歷健檢",
        title: "履歷健檢",
        description:
            "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
    },
    {
        id: 2,
        imgSrc: `${BASE_NAME}/online-console.png`,
        imgAlt: "線上諮詢",
        title: "線上諮詢",
        description: "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
    },
    {
        id: 3,
        imgSrc: `${BASE_NAME}/web-development.png`,
        imgAlt: "網頁開發",
        title: "網頁開發",
        description:
            "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
    },
    {
        id: 4,
        imgSrc: `${BASE_NAME}/training.png`,
        imgAlt: "企業內訓",
        title: "企業內訓",
        description:
            "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
    },
];

function ProfessionalService(): React.JSX.Element {
    return (
        <section className="professional-service container">
            <h2 className="professional-service__title fw-bold lh-base">專業服務與方案</h2>
            {professionalServiceDatas.map((professionalServiceData) => {
                return (
                    <div className="professional-service__item row align-items-center" key={professionalServiceData.id}>
                        <div className="col-12 col-lg-6">
                            <div className="professional-service__image-wrap">
                                <img src={professionalServiceData.imgSrc} alt={professionalServiceData.imgAlt} />
                            </div>
                        </div>
                        <div className="professional-service__content-wrap position-relative z-1">
                            <div className="professional-service__content p-6 bg-white">
                                <h3 className="professional-service__content-title fs-3 fw-bold lh-base">
                                    {professionalServiceData.title}
                                </h3>
                                <p className="professional-service__content-description lh-base text-gray mb-0">
                                    {professionalServiceData.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="professional-service__contact">
                <h3 className="professional-service__contact-title fs-3 fw-bold lh-base">聯繫我，取得更多資訊！</h3>
                <a href="mailto:alyse-wang@gmail.com" className="d-block text-decoration-none">
                    <img src={`${BASE_NAME}/arrow-right.svg`} alt="取得更多資訊" />
                </a>
            </div>
        </section>
    );
}

export default ProfessionalService;
