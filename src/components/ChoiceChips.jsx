import styled from "styled-components";

const Chips = styled.div`
  background: #eaf0f6;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin: 12px 0;
  padding: 15px 10px;
  border-radius: 8px;
  color: #2e475d;
  transition: 0.2s;

  h2 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
    font-weight: 500;
    margin: 10px 0 0 0;
    span {
      margin: 0 5px;
    }
  }
  &:hover {
    scale: 1.02;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  }
`;
const ChoiceChips = () => {
  return (
    <Chips>
      <h2> How to Create a Sales Plan: Template + Examples</h2>
      <p>
        marketing<span>|</span>8 min
      </p>
    </Chips>
  );
};

export default ChoiceChips;
