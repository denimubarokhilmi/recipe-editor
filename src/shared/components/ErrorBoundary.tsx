import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import styled from "styled-components";

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  background: #fff5f5;
  border: 1px solid #fecaca;
  border-radius: ${({ theme }: { theme?: { radius?: { md?: string } } }) =>
    theme?.radius?.md ?? "12px"};
  text-align: center;

  h5 {
    color: #dc2626;
    margin-bottom: 0.5rem;
    font-family: "Playfair Display", serif;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  button {
    background: #dc2626;
    color: white;
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
      background: #b91c1c;
    }
  }
`;

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Error:", error);
    console.log("Info:", info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorBox>
          <h5>There is an error 😢</h5>
          <p>{this.state.errorMessage || "Internal server error"}</p>
        </ErrorBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
