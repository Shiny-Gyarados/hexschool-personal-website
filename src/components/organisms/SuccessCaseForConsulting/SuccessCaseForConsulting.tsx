import Title from "@/components/atoms/Title";
import ReadMoreLink from "@/components/atoms/ReadMoreLink";
import { BASE_NAME } from "@/configs/global_configs";
import PodcastCard from "@/components/molecules/PodcastCard";
import "./success-case-for-consulting.scss";

export interface PodcastItem {
    id: number;
    avatar: string;
    title: string;
    mainPoints: string[];
    link: string;
}

const podcastList: PodcastItem[] = [
    {
        id: 1,
        avatar: `${BASE_NAME}/podcast-avatar1.png`,
        title: "無經驗到前端工程師 Offer",
        mainPoints: ["打造前端專案與履歷亮點", "深度強化面試表現"],
        link: "#",
    },
    {
        id: 2,
        avatar: `${BASE_NAME}/podcast-avatar2.png`,
        title: "轉職迷茫到明確學習規劃",
        mainPoints: ["制訂階段性目標與時間安排", "鼓勵參與前端社群或活動"],
        link: "#",
    },
    {
        id: 3,
        avatar: `${BASE_NAME}/podcast-avatar3.png`,
        title: "面試緊張到從容應對",
        mainPoints: ["透過面試模擬找出常犯的邏輯漏洞", "討論遇到不熟悉議題時的回應方式"],
        link: "#",
    },
    {
        id: 4,
        avatar: `${BASE_NAME}/podcast-avatar4.png`,
        title: "面試緊張到從容應對",
        mainPoints: ["擬定進階框架或技術研究目標", "培養跨團隊溝通與簡報能力"],
        link: "#",
    },
];

function SuccessCaseForConsulting() {
    return (
        <section className="success-case-for-consulting">
            <div className="container">
                <Title>
                    <span className="d-block d-md-inline">職涯諮詢</span>
                    <span className="d-block d-md-inline">成功案例</span>
                </Title>
                <div className="success-case-for-consulting__introduction row align-items-center">
                    <div className="col-12 col-md-7">
                        <div className="success-consulting__image-wrap p-6">
                            <picture>
                                <source media="(min-width: 768px)" srcSet={`${BASE_NAME}/success-consulting.png`} />
                                <source
                                    media="(max-width: 767px)"
                                    srcSet={`${BASE_NAME}/success-consulting-mobile.png`}
                                />
                                <img src={`${BASE_NAME}/success-consulting.png`} alt="職涯諮詢成功案例示意圖" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="success-consulting__content-wrap">
                            <div className="success-consulting__content col-12 bg-white">
                                <p className="fw-bold">
                                    在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                                    <strong>突破原有的舒適圈</strong>。
                                </p>
                            </div>
                            <div className="success-consulting__contact">
                                <p className="fw-bold mb-6">期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                                <ReadMoreLink
                                    href="mailto:alysewang@hexschool.com"
                                    className="success-consulting__contact-link"
                                >
                                    立即預約諮詢
                                </ReadMoreLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="success-case-for-consulting__podcast-wrap p-6">
                    <ul className="row list-unstyled" style={{ marginBottom: "-24px" }}>
                        {podcastList.map((podcastItem) => {
                            return <PodcastCard key={podcastItem.id} podcastItem={podcastItem} />;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SuccessCaseForConsulting;
