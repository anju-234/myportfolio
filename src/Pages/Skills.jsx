import React from "react";
import Heroimage from "../components/Heroimage/Heroimage";
import Skillsection from "../components/Skill/Skillsection";
import skillsData from "../Staticdata/skills";
import { Container } from "react-bootstrap";
import { useState } from "react";

function Skills() {
  const [skills] = useState(skillsData);
  return (
    <>
      <Heroimage heading="Here Are My Skills " />
      <Container>
        <Skillsection skill={skills} />
      </Container>
    </>
  );
}

export default Skills;
