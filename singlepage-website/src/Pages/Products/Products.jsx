import React from "react";
import  InfoSection  from "../../compoents/InfoSection/InfoSection";
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne1} />
      <InfoSection {...homeObjOne2} />
    </>
  );
}

export default Products;
