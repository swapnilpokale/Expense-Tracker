import React from "react";
import AddForm from "../../components/addForm";
import TopFold from "../../components/TopFold";
import "./add-expense.css";
const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;