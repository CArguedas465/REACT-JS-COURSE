import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* IMPORTANT ALTERNATIVE:
    
    The syntax that we are using up there is creating three states that we can manage throughout the application. However, if we
    want, we can use only ONE STATE for those three elements, by putting all of those properties within an object:
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '', 
        enteredAmount: '',
        enteredDate: ''
    });

    However, when we update that general state, we can't just update one of the properties in the object. We have to update the whole
    thing. For example, if in the titleChangeHandler we only do this: 
    
    const titleChangeHandler = (event) => {
        setUserInput(
            {
                enteredTitle: event.target.value
            }
        );
    }

    We will be telling it that the new state will be an object which only has that 'enteredTitle' prop, and the other props will be
    dropped. If we decide to manage the state in this way, we need to make sure that the other props do not get dropped when updating
    the state. For this, we have two options: 

    1) Copying all of the properties from the object again, to get their values at the moment

    const titleChangeHandler = (event) => {
        setUserInput(
            {
                enteredTitle: event.target.value, 
                enteredAmount: '', 
                enteredDate: ''
            }
        );
    }

    2) Or using the SPREAD operator to get all the other properties from the previous state element:

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState, 
                enteredTitle: event.target.value
            }
        });
    }

    This way, we can update the state without losing any of the properties of the initial state.
    
    --->SUPER IMPORTANT NOTE: WHEN UPDATING A STATE THAT DEPENDS ON A PREVIOUS STATE, just like in option 2, 
        the assignment parameter should be a FUNCTION. This is because if don't do it that way, and we do it
        like: 

        const titleChangeHandler = (event) => {
            setUserInput(
                {
                    ...userInput, 
                    enteredTitle: event.target.value
                }
            });
        }

        We may run into REACT scheduling issues, because when we call the state reassignment function, what REACT 
        does is that it SCHEDULES a state change; it doesn't necessarily do it automatically. This means that, in
        some instances, the previous state may be outdated or just give issues. When we do the update as a FUNCTION, 
        we guarantee that we are using the latest version of the state. 
    
    */

  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!showForm) {
      setShowForm(true);
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");

      setShowForm(false);
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      {showForm && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2019-01-01"
              step="2022-12-31"
            />
          </div>
        </div>
      )}
      <div
        style={!showForm ? { textAlign: "center" } : {}}
        className="new-expense__actions"
      >
        {showForm && <button type="button" onClick={closeForm}>Cancel</button>}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
