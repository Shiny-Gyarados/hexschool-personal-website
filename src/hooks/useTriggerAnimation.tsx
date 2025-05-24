import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_OFFSET = 120;
const DEFAULT_DURATION = 0.7;
const DEFAULT_EASE = "power2.out";
const DEFAULT_START_STATE = {
    opacity: 0,
    y: 100,
};
const DEFAULT_END_STATE = {
    opacity: 1,
    y: 0,
    duration: DEFAULT_DURATION,
    ease: DEFAULT_EASE,
};

export interface UseTriggerAnimationOptions {
    startState?: gsap.TweenVars;
    endState?: gsap.TweenVars;
    offset?: number;
}

function useTriggerAnimation(ref: React.RefObject<HTMLElement | null>, options?: UseTriggerAnimationOptions) {
    useGSAP(
        () => {
            const animationStartState = options?.startState ?? DEFAULT_START_STATE;
            const animationEndState = options?.endState ?? DEFAULT_END_STATE;
            gsap.set(ref.current, animationStartState);
            ScrollTrigger.create({
                trigger: ref.current,
                start: `top bottom-=${options?.offset ?? DEFAULT_OFFSET}px`,
                end: "bottom top",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    gsap.to(ref.current, animationEndState);
                },
                onLeaveBack: () => {
                    // 當離開觸發區域向上滾動時，重置初始狀態
                    gsap.to(ref.current, {
                        ...animationStartState,
                        duration: 0.3,
                        ease: DEFAULT_EASE,
                    });
                },
            });
        },
        { scope: ref, dependencies: [ref, options] }
    );
}

export default useTriggerAnimation;
