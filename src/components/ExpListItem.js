import React from "react";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";

const Expense = styled.div`
  border: solid 1px #ededed;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  position: relative;
  transition: all 0.5s ease;

  & .cost {
    color: #979797;
    position: absolute;
    right: 22rem;
  }

  & .icons {
    position: absolute;
    right: 2rem;
    display: flex;
    gap: 10px;
  }

  & .icons .green {
    color: #4bae51;
  }

  & .icons .red {
    color: #c55150;
  }

  & .icons div:hover {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

const ExpListItem = ({ expense, onRemove, onEditMode }) => {
  const { spendFor, cost, id } = expense;

  return (
    <div>
      <Expense>
        <p className="spendFor">{spendFor}</p>
        <p className="cost">{cost}</p>
        <div className="icons">
          <div className="green" onClick={() => onEditMode(expense)}>
            <MdEdit />
          </div>
          <div className="red" onClick={() => onRemove(id)}>
            <IoMdTrash />
          </div>
        </div>
      </Expense>
    </div>
  );
};

export default React.memo(ExpListItem);
