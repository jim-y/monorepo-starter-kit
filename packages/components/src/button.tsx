import React from 'react';

function Button({ children }: React.PropsWithChildren<unknown>): JSX.Element {
  return <button className="button">{children}</button>;
}

export { Button };
