import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  let expenseTitle = props.title;
  const expenseAmount = props.amount;

  /*There's something interesting to note here. The syntax used here is not really something REACT-specific. Here, we are 
    just using array destructuring, which is a new gen javascript feature. Just like we use object destructuring with the
    
    const {prop1, prop2} = objectContainingProps

    We can do the same thing with ARRAYS, by using [] instead of {}. What happens with the useState() function/hook is that it
    ALWAYS returns an array with two elements: 

        - The first one is the actual value which can be used to call the variable which will trigger the state change. 
        - The second one is a function object which can be used to alter the value of the variable.

    That's why we use this syntax; it's not because it's standard syntax for pulling elements out of the hook itself, but because
    we are using the next gen javascript feature of array destructuring to get that information from the resulting object of the
    useState() function/hook. 

    Also, the useState() hooks takes as an argument the original state in which we are going to set our state variable. In this case, 
    our state variable is gonna have it's initial state set up as the title that is coming through the props, which is assigned to 
    the 'expenseTitle' variable.

    */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
