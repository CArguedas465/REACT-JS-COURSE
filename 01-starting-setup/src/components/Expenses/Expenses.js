import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("Choose Year");

  let filteredExpenses;
  if (filteredYear === "Choose Year") {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear() === Number.parseInt(filteredYear)
    );
  }

  const changeFilteredYear = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilteredYear={changeFilteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {/*As we know, .map() executes a certain code for every element in the array, and returns a new
        array with the resulting calculations. The reason why doing this here works is because REACT is able
        to understand arrays of components, so if we were to like, for example, have:
        
        {
          [<ExpenseItem/>, <ExpenseItem/>, <ExpenseItem/>, <ExpenseItem/>]
        }

        Where we use {} to add dynamic code and then [] to specify an ARRAY of components, REACT knows that
        it can render that just side by side. This is why using map works in this context; because the 
        resulting logic is an array which can be displayed.
        */}
      <ExpensesList items={filteredExpenses} />
      {/*WHY DO WE NEED THE KEY PROP?
        
          Everytime we are rendering data dynamically through looping data structures, each one of the 
          resulting elements has to have a unique identifier. If that is not the case, then it still works,
          but it is prone to: 

            --> PERFORMANCE ISSUES: Since there is no unique identifier for each element, whenever a new one is
            added to the array, REACT has to check ALL ELEMENTS AGAIN to make sure that after the addition, 
            whatever is being displayed still matches what's on the array. To REACT, array elements without
            an identifier all look the same, so it can't tell which new element needs to be checked for updates;
            it just does it for the whole thing. 

            --> BUGS: Because this general "rechecking" happens if there is no specific key for REACT to update, it's
            possible for states in other array components to be LOST because of the addition of a new element. Of course 
            this doesn't happen if there is unique key identifier for each element, because REACT then know which element
            to check for updates specifically, withouth fucking up any of the states or data of the other elements
            in display. 

            THEREFORE, EVERYTIME WE LOOP A DATA STRUCTURE TO DYNAMICALLY GENERATE CONTENT IN REACT, A KEY HAS TO BE SUPPLIED. 
            THIS IS REGARDLESS OF IF WE'RE WORKING WITH A CUSTOM COMPONENT (THIS CASE) OR A BASE HTML ELEMENT.
        
        */}
    </Card>
  );
};

export default Expenses;
