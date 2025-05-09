import SocialLinkList from "@/components/molecules/SocialLinkList";
import { BASE_NAME } from "@/configs/global_configs";
import "./about-me.scss";

const sharingLinks = [
    {
        href: "https://www.youtube.com/",
        imgSrc: `${BASE_NAME}/youtube.svg`,
        imgAlt: "Alyse's Youtube Link",
    },
    {
        href: "https://podcasts.apple.com/tw/browse",
        imgSrc: `${BASE_NAME}/podcast.svg`,
        imgAlt: "Alyse's Podcasts Link",
    },
    {
        href: "https://www.facebook.com/",
        imgSrc: `${BASE_NAME}/fb.svg`,
        imgAlt: "Alyse's Facebook Link",
    },
    {
        href: "https://www.linkedin.com/",
        imgSrc: `${BASE_NAME}/linkedin.svg`,
        imgAlt: "Alyse's LinedIn Link",
    },
    {
        href: "https://www.instagram.com/",
        imgSrc: `${BASE_NAME}/instagram.svg`,
        imgAlt: "Alyse's Instagram Link",
    },
];

function AboutMe(): React.JSX.Element {
    return (
        <section className="about-me">
            <div className="about-me-card bg-white">
                <div className="about-me-card__content">
                    <p className="about-me-card__text fw-medium">
                        <span className="d-block d-md-inline text-black">嗨，我是Alyse</span>
                        <span className="d-block d-md-inline text-black">一名深耕前端技術的工程師。</span>
                    </p>
                    <p className="about-me-card__text fw-medium text-black">
                        擅長 React、Vue
                        等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
                    </p>
                    <SocialLinkList links={sharingLinks} />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
