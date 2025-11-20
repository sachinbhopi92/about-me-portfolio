"use client";

import { useEffect } from "react";
import "../../../src/lib/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize i18n on client side
  }, []);

  return <>{children}</>;
};

export default I18nProvider;
