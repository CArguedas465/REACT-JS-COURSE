import styled from "styled-components";

import "./Button.css";

/*

  STYLED COMPONENTS: 
  
    Styled components is a library we can use to style components and to make sure that every style is unique for the component it's 
    styling. The only problem with using general .css files to style is that the files are GLOBAL, meaning that they will affect 
    every element which implements the classes defined in the file. 

    When using styled components, we use an special object which has a method per each type of html element. For example, below we can
    see that we are using the 'styled' object, and we are calling the 'button' method on it, which will return a button component. 

    The weird part about the syntax is the fact that it uses backticks (``). We can think of these backticks almost as the arguments 
    for the method call, but instead, what we will be passing are the styles for the button that the styles.button method should be
    returning. 

    As we can see, when using the methods there, we don't really use selectors. We just specify the properties which we want to 
    apply to the element and that's it. It's also important to note that if we want or need to use pseudo classes, we can do so, 
    but instead of putting something like button:hover or similar, as we would in external css through a file, we use the '&' 
    operator. The ampersand tells react that we are referring to the current element in order to attach a pseudo class to it, so 
    it obeys. In this case, we also need to add the {}, just as shown below. 

    If all goes well, we can go to the application and we'll see that it behaves exactly the same as it did before, when the 
    styles were indicated in a css file (in the case of this project, the Button.css file). 
*/

/*MEDIA QUERIES: We can use the @media tag to create media queries. Media queries allow us to use conditions when working with
styles. This way, if a certain condition passed into the parentheses is true, the specified style is applied. In this case, we 
can notice that based on the value for min-width, the width for the element will be either 'auto' or '100%'. */

const Button = styled.button`
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  &:focus {
    outline: none;
  }

  @media (min-width: 768px){
    width: auto;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
