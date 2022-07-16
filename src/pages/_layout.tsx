import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LinkList from "./link-list";

function Layout() {
  return (
    <div>
      <LinkList />
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
