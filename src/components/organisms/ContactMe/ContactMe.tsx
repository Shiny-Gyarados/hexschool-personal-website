import Title from "@/components/atoms/Title";
import ArrowRight from "@/components/atoms/ArrowRight";
import { BASE_NAME } from "@/configs/global_configs";
import SocialLink from "@/components/atoms/SocialLink";

import "./contact-me.scss";

const sharingLinks = [
    {
        href: "https://www.youtube.com/",
        imgSrc: `${BASE_NAME}/youtube.svg`,
        imgAlt: "Alyse's Youtube Link",
        title: "Youtube",
        text: "職涯諮詢室",
    },
    {
        href: "https://podcasts.apple.com/tw/browse",
        imgSrc: `${BASE_NAME}/podcast.svg`,
        imgAlt: "Alyse's Podcasts Link",
        title: "Podcasts",
        text: "職涯諮詢室",
    },
    {
        href: "https://www.facebook.com/",
        imgSrc: `${BASE_NAME}/fb.svg`,
        imgAlt: "Alyse's Facebook Link",
        title: "Facebook",
        text: "前端社群",
    },
    {
        href: "https://www.linkedin.com/",
        imgSrc: `${BASE_NAME}/linkedin.svg`,
        imgAlt: "Alyse's LinedIn Link",
        title: "LinkedIn",
        text: "職涯交流",
    },
    {
        href: "https://www.instagram.com/",
        imgSrc: `${BASE_NAME}/instagram.svg`,
        imgAlt: "Alyse's Instagram Link",
        title: "Instagram",
        text: "日常分享",
    },
];

function ContactMe(): React.JSX.Element {
    return (
        <section className="contact-me">
            <div className="container">
                <Title>與我聯繫</Title>
                <ul className="list-unstyled">
                    <li className="contact-me__item mb-6">
                        <a
                            className="d-flex flex-column flex-md-row fs-4 text-decoration-none text-black pb-4 flex-md-row justify-content-md-between"
                            href="mailto:alysewang@hexschool.com"
                        >
                            <div className="d-flex flex-column flex-md-row fs-4">
                                <span className="mb-2 text-decoration-underline">alysewang@hexschool.com</span>
                                <span className="mb-2">合作洽談</span>
                            </div>
                            <div className="align-content-center">
                                <div className="contact-me__arrow-right-wrap">
                                    <ArrowRight />
                                </div>
                            </div>
                        </a>
                    </li>
                    {sharingLinks.map((sharingLink) => {
                        return (
                            <li key={sharingLink.href} className="contact-me__item mb-6">
                                <a
                                    className="d-flex flex-column flex-md-row fs-4 text-decoration-none text-black pb-4 flex-md-row justify-content-md-between"
                                    href={sharingLink.href}
                                >
                                    <div className="d-flex fs-4 align-items-center mb-2">
                                        <SocialLink
                                            isLink={false}
                                            imgSrc={sharingLink.imgSrc}
                                            imgAlt={sharingLink.imgAlt}
                                        />

                                        <span className="d-inline-block me-2">{sharingLink.title}</span>
                                        <span className="d-inline-block">{sharingLink.text}</span>
                                    </div>
                                    <div className="align-content-center">
                                        <div className="contact-me__arrow-right-wrap">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default ContactMe;
