import { useState, useRef, useEffect } from "react";
import CheckSVG from "@/components/atoms/CheckSVG";
import CopySVG from "@/components/atoms/CopySVG";
import "./code-block-copy-button.scss";

export interface CodeBlockCopyButtonProps {
    textToCopy?: string;
}

function CodeBlockCopyButton(props: CodeBlockCopyButtonProps) {
    const [showCopied, setShowCopied] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleCopy = async () => {
        if (showCopied === false) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            await navigator.clipboard.writeText(props?.textToCopy ?? "");
            setShowCopied(true);
            timerRef.current = setTimeout(() => setShowCopied(false), 1000);
        }
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);
    return (
        <button className="code-block-copy-button" onClick={handleCopy}>
            {showCopied ? <CheckSVG size={20} /> : <CopySVG size={20} />}
        </button>
    );
}

export default CodeBlockCopyButton;
