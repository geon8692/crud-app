import styled from "styled-components";
import Calculator from "./components/Calculator";
import { useCallback, useState } from "react";
import Alert from "./components/Alert";

const CalcTemplate = styled.div`
  width: 840px;
  margin-left: auto;
  margin-right: auto;

  & h2 {
    text-align: right;
  }
`;

function App() {
  const [expenses, setExpenses] = useState([
    {
      spendFor: "식비",
      cost: 1000,
      id: 1,
    },
    {
      spendFor: "여가비",
      cost: 2000,
      id: 2,
    },
    {
      spendFor: "출장비",
      cost: 3000,
      id: 3,
    },
  ]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editExp, setEditExp] = useState({});
  const [alertState, setAlertState] = useState("");

  const onInsert = useCallback(
    (exp) => {
      const newExpense = {
        ...exp,
        id: Date.now(),
      };
      setExpenses(() => expenses.concat(newExpense));
      setAlertState(() => "CREATE");
    },
    [expenses]
  );

  const onRemoveAll = useCallback(() => {
    setExpenses(() => []);
    setAlertState(() => "DELETEALL");
  }, []);

  const onRemove = useCallback(
    (id) => {
      setExpenses(() => expenses.filter((expense) => expense.id !== id));
      setAlertState(() => "DELETE");
    },
    [expenses]
  );

  const onEditMode = useCallback((exp) => {
    setIsEditMode(() => true);
    setEditExp(() => exp);
  }, []);

  const onEdit = useCallback(
    (newExpense) => {
      setExpenses(() =>
        expenses.map((expense) =>
          expense.id === editExp.id
            ? {
                ...expense,
                spendFor: newExpense.spendFor,
                cost: newExpense.cost,
              }
            : expense
        )
      );
      setIsEditMode(() => false);
      setAlertState(() => "EDIT");
    },
    [editExp, expenses]
  );

  return (
    <CalcTemplate>
      <Alert alertState={alertState} />
      <h1>예산 계산기</h1>
      <Calculator
        expenses={expenses}
        onInsert={onInsert}
        onRemoveAll={onRemoveAll}
        onRemove={onRemove}
        onEditMode={onEditMode}
        isEditMode={isEditMode}
        onEdit={onEdit}
        editExp={editExp}
      />
      <h2>
        총 지출 : {expenses.reduce((prev, curr) => prev + curr.cost, 0)}원
      </h2>
    </CalcTemplate>
  );
}

export default App;
