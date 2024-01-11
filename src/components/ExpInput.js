import React, { useCallback, useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  & + button {
    margin-bottom: 20px;
  }
`;

const Input = styled.div`
  flex: 1;
  padding-left: 5px;
  margin-bottom: 20px;
  margin-top: 10px;

  & p {
    color: #e9b872;
    margin: 0;
  }

  & input {
    width: 22rem;
    padding: 10px;
    padding-left: 5px;
    border: none;
    border-bottom: solid 1px #d6d2cb;
    font-size: 16px;
  }
`;

const ExpInput = ({ onInsert, isEditMode, onEdit, editExp }) => {
  const [spendFor, setSpendFor] = useState("");
  const [cost, setCost] = useState(0);

  useEffect(() => {
    if (isEditMode) {
      setSpendFor(editExp.spendFor);
      setCost(editExp.cost);
    }
  }, [editExp.cost, editExp.spendFor, isEditMode]);

  const onChange_1 = useCallback((e) => {
    setSpendFor(e.target.value);
  }, []);

  const onChange_2 = useCallback((e) => {
    setCost(parseInt(e.target.value));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newExp = { spendFor: spendFor, cost: cost };
      isEditMode ? onEdit(newExp) : onInsert(newExp);
      setSpendFor("");
      setCost(0);
    },
    [onInsert, spendFor, cost, isEditMode, onEdit]
  );

  return (
    <div>
      <Container>
        <Input>
          <p>지출 항목</p>
          <input
            placeholder="예) 렌트비"
            onChange={onChange_1}
            value={spendFor}
          />
        </Input>
        <Input>
          <p>비용</p>
          <input type="number" onChange={onChange_2} value={cost} />
        </Input>
      </Container>
      {isEditMode ? (
        <button onClick={onSubmit}>
          수정 <MdSend />
        </button>
      ) : (
        <button onClick={onSubmit}>
          제출 <MdSend />
        </button>
      )}
    </div>
  );
};

export default ExpInput;
