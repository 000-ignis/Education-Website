import React from "react";
import Faq from "./Faq";
import PriceCard from "./PriceCard";
import Back from "../common/back/";

const Pricing = () => {
  return (
    <>
      <Back title="Choose the right plane" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
