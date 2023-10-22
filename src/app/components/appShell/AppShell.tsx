"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React, { PropsWithChildren } from "react";
import { LinkIcon } from "@heroicons/react/24/solid";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col gap-0">
      <Navbar maxWidth="full" isBordered>
        <NavbarBrand>
          <Link
            isBlock
            className="text-primary flex items-center gap-2 text-xl font-bold"
          >
            <LinkIcon className="h-6 w-6 text-blue-500" /> DiscLink
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button>Login</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};

export default AppShell;
