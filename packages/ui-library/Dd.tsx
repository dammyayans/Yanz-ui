import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Dd = ({ children }: Props) => {
  return (
    <div>
      <h1>dd</h1>
      {children}
    </div>
  );
};
