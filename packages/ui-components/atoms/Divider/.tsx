import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Divider = ({ children }: Props) => {
  return (
    <div>
      <h1>divider</h1>
      {children}
    </div>
  );
};
