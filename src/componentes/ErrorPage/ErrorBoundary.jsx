import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      navigate('/');
    }
  }, [hasError, navigate]);

  const getDerivedStateFromError = (error) => {
    setHasError(true);
  };

  const componentDidCatch = (error, errorInfo) => {
    console.error("Uncaught error:", error, errorInfo);
  };

  if (hasError) {
    return null; // O puedes renderizar un fallback UI temporal aquí.
  }

  return children;
}

export default ErrorBoundary;
