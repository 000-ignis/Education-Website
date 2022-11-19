import React from "react";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/AWrapper";
import Back from "../common/back/Back";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
