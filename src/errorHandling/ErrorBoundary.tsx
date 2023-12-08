import { Component } from "react";
interface ErrorBoundaryAppProps {
  fallback?: JSX.Element;
  children: JSX.Element;
}

interface ErrorBoundaryAppState {
  hasError: boolean;
}

export class ErrorBoundaryApp extends Component<
  ErrorBoundaryAppProps,
  ErrorBoundaryAppState
> {
  constructor(props: ErrorBoundaryAppProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log("error", error);
    console.log("info", info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryApp;
