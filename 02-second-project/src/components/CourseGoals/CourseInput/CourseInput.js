import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

/*STYLED COMPONENTS PART 2
  
    Just like the Button.js file where we created a styled.button element, here we can create a FormControl element based on a 
    'styled' object div. Just how we create custom functional components, we can create custom components that we can reuse in 
    several places in the application. 

    It's just a matter of exporting the component with 'export'. Also, if we want to create styles for elements that will be nested
    inside the custom component, we can also use the & operator, meaning that it doesn't only have to do with working with pseudo-
    classes, just like in the Button.js element, but rather to referring with to the element we're creating itself.
     
  */

/*Here, we can see that we are using the & operator to refer to the element itself. For example, when it says '& label', it means
    that the style being configured will be applied to any 'label' element nested within the the <FormControl><FormControl/> component.  
    
    Same thing with '& input:focus'; it means that the style will be applied to a nested input element within the <FormControl> 
    element when it gets focused. Basically, the & refers to the 'styled' object we are creating itself. For the styles that don't have
    this syntax nor the brackets {}, the style just gets applied to the element being created as well.*/

const FormControl = styled.div`

  margin: 0.5rem 0; 

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")}
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border-radius: 10px;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
