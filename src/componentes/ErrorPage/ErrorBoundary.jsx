import React from 'react';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      this.props.history.push('/error');
    }
  }

  render() {
    if (this.state.hasError) {
      return null; // O puedes renderizar un fallback UI temporal aquí.
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
