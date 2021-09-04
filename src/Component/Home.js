import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import arr from "./data";
import styled from "styled-components";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;
const Home = () => {
  let country = arr[0];
  let states = country.india;

  let indiStates = Object.keys(states);

  return (
    <>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={<StyledNode>India</StyledNode>}
      >
        {indiStates.map((cur) => {
          return (
            <TreeNode label={<StyledNode>{cur}</StyledNode>}>
              {states[cur].map((cur1) => {
                return <TreeNode label={<StyledNode>{cur1}</StyledNode>} />;
              })}
            </TreeNode>
          );
        })}
      </Tree>
    </>
  );
};
export default Home;
