import React, { useCallback } from "react";
import ExpListItem from "./ExpListItem";
import { IoMdTrash } from "react-icons/io";

const ExpList = ({ expenses, onRemoveAll, onRemove, onEditMode }) => {
  const onClick = useCallback(() => {
    onRemoveAll();
  }, [onRemoveAll]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpListItem
          expense={expense}
          key={expense.id}
          onRemove={onRemove}
          onEditMode={onEditMode}
        />
      ))}
      <button onClick={() => onClick()}>
        목록 지우기 <IoMdTrash />
      </button>
    </div>
  );
};

export default React.memo(ExpList);
