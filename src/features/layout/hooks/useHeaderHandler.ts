"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export type HeaderHandlerProps = {
  initialQuery: string;
  keyword: string;
  handleKeywordChange: (value: string) => void;
  handleSearchSubmit: () => void;
  handleClearSearch: () => void;
};

export function useHeaderHandler(): HeaderHandlerProps {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [keyword, setKeyword] = useState(initialQuery);

  const handleSearchSubmit = useCallback(() => {
    const q = keyword.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
  }, [keyword, router]);

  const handleClearSearch = useCallback(() => {
    setKeyword("");
  }, []);

  const handleKeywordChange = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  return {
    initialQuery,
    keyword,
    handleKeywordChange,
    handleSearchSubmit,
    handleClearSearch,
  };
}
