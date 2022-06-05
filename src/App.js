import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "../src/Expenses/ExpenseItem";
import Expenses from "./Expenses/Expenses";
import ExpenseForm from "./NewExpense/ExpenseForm";
import NewExpense from "./NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 98.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 98.67,
      date: new Date(2021, 2, 24),
    },
    {
      id: "e3",
      title: "Cooler",
      amount: 125.67,
      date: new Date(2021, 2, 24),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
