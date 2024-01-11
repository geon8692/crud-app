import React from "react";
import styled from "styled-components";
import ExpInput from "./ExpInput";
import ExpList from "./ExpList";

const Container = styled.div`
  width: 800px;
  background-color: white;
  padding: 20px;

  button {
    background: #8ea959;
    border: none;
    border-radius: 2px;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button:hover {
    cursor: pointer;
  }
`;

const Calculator = ({
  expenses,
  onInsert,
  onRemoveAll,
  onRemove,
  onEditMode,
  isEditMode,
  onEdit,
  editExp,
}) => {
  return (
    <Container>
      <ExpInput
        onInsert={onInsert}
        isEditMode={isEditMode}
        onEdit={onEdit}
        editExp={editExp}
      />
      <ExpList
        expenses={expenses}
        onRemoveAll={onRemoveAll}
        onRemove={onRemove}
        onEditMode={onEditMode}
      />
    </Container>
  );
};

export default Calculator;
