import React from "react";
import styled from "styled-components";

const AlertBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: white;
  background: ${(props) => {
    if (props.color === "green") return "#4BAE51";
    else if (props.color === "red") return "#C55150";
    else return "none";
  }};
`;

const Alert = ({ alertState }) => {
  switch (alertState) {
    case "CREATE":
      return <AlertBox color="green">아이템이 생성되었습니다.</AlertBox>;
    case "EDIT":
      return <AlertBox color="green">아이템이 수정되었습니다.</AlertBox>;
    case "DELETE":
      return <AlertBox color="red">아이템이 삭제되었습니다.</AlertBox>;
    case "DELETEALL":
      return <AlertBox color="red">아이템이 모두 삭제되었습니다.</AlertBox>;
    default:
      return <AlertBox />;
  }
};

export default Alert;
