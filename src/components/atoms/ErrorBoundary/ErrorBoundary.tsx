import { Component } from "react";
// types
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    static getDerivedStateFromError(): Partial<State> {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Lazy component loading error:", error, errorInfo);
        this.setState({ errorMessage: error?.message ?? "" });
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? this.state?.errorMessage ?? "Error";
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
