import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div
      id="error-page"
      className="text-red-600 flex flex-col items-center justify-center h-screen"
    >
      <h1>Oops!</h1>
      <p className="font-bold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
