import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinkList from "@/components/molecules/SocialLinkList";
import { sharingLinks } from "@/configs/sharing_config";
import "./about-me.scss";

function AboutMe(): React.JSX.Element {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const animationStartState = {
                opacity: 0,
                x: -50,
            };
            const animationEndState = {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power2.out",
            };
            gsap.set(aboutMeRef.current, animationStartState);
            ScrollTrigger.create({
                trigger: aboutMeRef.current,
                start: "top bottom-=120px", // 當 trigger 的頂部從螢幕底部露出120px時觸發
                end: "bottom top", // 當 trigger 的底部離開螢幕頂部時結束
                toggleActions: "play none none reverse", // 進入時播放，離開時反向播放
                onEnter: () => {
                    gsap.to(aboutMeRef.current, animationEndState);
                },
                onLeaveBack: () => {
                    // 當離開觸發區域向上滾動時，重置初始狀態
                    gsap.to(aboutMeRef.current, {
                        ...animationStartState,
                        duration: 0.3,
                        ease: "power2.in",
                    });
                },
            });
        },
        { scope: aboutMeRef }
    );
    return (
        <section className="about-me" ref={aboutMeRef}>
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
