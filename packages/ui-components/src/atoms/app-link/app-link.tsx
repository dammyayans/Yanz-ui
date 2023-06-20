import React, { FC, PropsWithChildren } from "react";

interface AppLinkProps {
  to: string;
}
const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

export default AppLink;
