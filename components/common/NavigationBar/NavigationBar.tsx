import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Tab from "../Tab";
import routes from "../../../routes";
import { IRoute } from "../../../routes/interfaces";

const NavigationBar = () => {
  const router = useRouter();
  const currentRouteIdx = routes.findIndex(
    (route) => route.path === router.pathname
  );

  const [selectedIndex, setSelectedIndex] = useState<number>(currentRouteIdx);
  const [tabs] = React.useState<IRoute[]>(routes);

  return (
    <div className="flex-row-container">
      {tabs.map((tab, index) => (
        <Tab
          onSelect={() => {
            setSelectedIndex(index);
          }}
          isSelected={index === selectedIndex}
          key={tab.name}
        >
          <NextLink href={tab.path}>
            <a>{tab.name}</a>
          </NextLink>
        </Tab>
      ))}
    </div>
  );
};

export default NavigationBar;
