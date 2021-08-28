import React from "react";
import NextLink from "next/link";
import { Pane, Heading, Link, majorScale } from "evergreen-ui";
import NavigationBar from "../NavigationBar";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

const Header = () => {
  return (
    <div className="w-80 h-20 flex-column-container">
      <NextLink href="/">
        <Link
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin={majorScale(2)}
          cursor="pointer"
        >
          <Heading size={900}>{appName}</Heading>
        </Link>
      </NextLink>
      <NavigationBar />
    </div>
  );
};

export default Header;
