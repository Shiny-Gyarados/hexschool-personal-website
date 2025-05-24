import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./banner-card.scss";

interface BannerCardProps {
    name: string;
    job: string;
}

function BannerCard({ name, job }: BannerCardProps): React.JSX.Element {
    const bannerCardRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const animationStartState = {
                opacity: 0,
                y: 100,
            };
            const animationEndState = {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
            };
            gsap.set(".banner-card__about-name", animationStartState);
            gsap.set(".banner-card__about-skills", animationStartState);
            ScrollTrigger.create({
                trigger: ".gsap-trigger",
                start: "top bottom", // 當 trigger 的頂部從螢幕底部露出120px時觸發
                end: "bottom top", // 當 trigger 的底部離開螢幕頂部時結束
                toggleActions: "play none none reverse", // 進入時播放，離開時反向播放
                onEnter: () => {
                    gsap.to(".banner-card__about-name", animationEndState);
                    gsap.to(".banner-card__about-skills", animationEndState);
                },
                onLeaveBack: () => {
                    // 當離開觸發區域向上滾動時，重置初始狀態
                    gsap.to(".gsap-left-to-right", {
                        ...animationStartState,
                        duration: 0.3,
                        ease: "power2.in",
                    });
                },
            });
        },
        { scope: bannerCardRef }
    );
    return (
        <section className="container-fluid">
            <div className="banner-card row">
                <div className="col-12 col-md-6 px-0">
                    <div className="banner-card__avatar w-100 h-100"></div>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="banner-card__about" ref={bannerCardRef}>
                        <h1 className="banner-card__about-name gsap-trigger text-primary fw-900 text-start lh-base mb-3 text-nowrap">
                            {name}
                        </h1>
                        <h2 className="banner-card__about-skills text-primary fs-3 fw-bold text-start lh-base mb-0">
                            {job}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerCard;
