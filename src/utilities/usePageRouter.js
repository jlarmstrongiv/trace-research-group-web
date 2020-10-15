import React from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';

const usePageRouter = () => {
  let router = useRouter();

  if (typeof window !== 'undefined') {
    const parsedQueryString = queryString.parse(
      window.location.search || '',
    );
    Object.entries(parsedQueryString).forEach(
      ([key, value]) => {
        router.query[key] = value || router.query[key];
      },
    );
  }

  return router;
};

export default usePageRouter;
