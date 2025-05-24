import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProfessionalServiceData } from "@/components/organisms/ProfessionalService/ProfessionalService";
import "./professional-service-card.scss";

interface ProfessionalServiceCardProps {
    professionalServiceData: ProfessionalServiceData;
    index: number;
}

function ProfessionalServiceCard({ professionalServiceData, index }: ProfessionalServiceCardProps): React.JSX.Element {
    const professionalServiceCardRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            // 初始設置 - 設置初始透明度為0
            const leftToRightX = index % 2 === 0 ? -50 : 50;
            const rightToLeftX = index % 2 === 0 ? 50 : -50;
            gsap.set(".gsap-left-to-right", { opacity: 0, x: leftToRightX });
            gsap.set(".gsap-right-to-left", { opacity: 0, x: rightToLeftX });

            // 創建滾動觸發動畫
            ScrollTrigger.create({
                trigger: ".gsap-trigger",
                start: "top bottom-=120px", // 當 trigger 的頂部從螢幕底部露出120px時觸發
                end: "bottom top", // 當 trigger 的底部離開螢幕頂部時結束
                toggleActions: "play none none reverse", // 進入時播放，離開時反向播放
                onEnter: () => {
                    gsap.to(".gsap-left-to-right", {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        ease: "power2.out",
                    });
                    gsap.to(".gsap-right-to-left", {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        ease: "power2.out",
                    });
                },
                onLeaveBack: () => {
                    // 當離開觸發區域向上滾動時，重置初始狀態
                    gsap.to(".gsap-left-to-right", {
                        opacity: 0,
                        x: leftToRightX,
                        duration: 0.3,
                        ease: "power2.in",
                    });

                    gsap.to(".gsap-right-to-left", {
                        opacity: 0,
                        x: rightToLeftX,
                        duration: 0.3,
                        ease: "power2.in",
                    });
                },
            });
        },
        { scope: professionalServiceCardRef, dependencies: [index] }
    );
    return (
        <div
            className="professional-service__item row align-items-center overflow-hidden"
            ref={professionalServiceCardRef}
        >
            <div className="gsap-left-to-right gsap-trigger col-12 col-lg-6">
                <div className="professional-service__image-wrap">
                    <img src={professionalServiceData.imgSrc} alt={professionalServiceData.imgAlt} />
                </div>
            </div>
            <div className="gsap-right-to-left professional-service__content-wrap position-relative z-1">
                <div className="professional-service__content p-6 bg-white">
                    <h3 className="fs-3 fw-bold lh-base">{professionalServiceData.title}</h3>
                    <p className="lh-base text-gray mb-0">{professionalServiceData.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalServiceCard;
