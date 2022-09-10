import '../styles/Container.css'

const Container = (props) => {
    return <div className="mainDiv">
        {props.children}
    </div>
}

export default Container;