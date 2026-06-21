"use client"

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const WrapperNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav}  closeNav={closeNavHandler}/>
    </>
  );
};

export default WrapperNav;
