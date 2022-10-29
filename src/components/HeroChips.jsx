import React from "react";
import styled from "styled-components";
const HeroChips = (props) => {
  const Wrapper = styled.section`
    padding: 10px;
    margin: 5px 5px 5px 0;
    border-radius: 8px;
    color: ${(props) => props.color};
    font-size: 14px;
    font-weight: 500;
    background: ${(props) => props.bg};
  `;
  return (
    <Wrapper
      bg={props.bg}
      color={props.color === "#5C5C5C" ? "#5C5C5C" : "white"}
    >
      {props.text}
    </Wrapper>
  );
};

export default HeroChips;
