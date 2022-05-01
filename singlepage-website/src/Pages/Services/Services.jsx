import React from "react";
import InfoSection from "../../compoents/InfoSection/InfoSection";
import Pricing from "../../compoents/Pricing/Pricing";
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne1} />
      <InfoSection {...homeObjOne3} />
    </>
  );
}

export default Services;
