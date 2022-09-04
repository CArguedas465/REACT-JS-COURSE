import './Card.css'

const Card = props => {
    const classes = 'card ' + props.className;

    /*The .children element in the props is not a prop name that I'm passing as part of whatever the
    component is receiving. All components get access to the .children prop, regardless of whether there
    is a property named 'children' being passed on.
    
    The .children prop gives us access to all the children element inside a given component. In this case,
    if we look at the calling of the Card component: 

    <Card className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </Card>

    We can see that <Card></Card> has children within it. In order for us to be able to use the Card 
    component as a container for other components, we need to take it's children from the .children 
    prop and put it within the container div being programmed for the container component, just like
    shown below:
    */ 
   
    return <div className={classes}>{props.children}</div>
}

export default Card;