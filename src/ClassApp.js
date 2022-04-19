import React from 'react';

class ClassApp extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Ali",
        }
    }
    
    componentDidMount(){
        console.log("did mount")
    }

    componentDidUpdate(){
        console.log("did update")
    }
    changeName(){
        console.log("change name")
        this.setState({name:"ahmed"})
    }
    render() {
        return (
            <>
                <h1>Hello {this.state.name} from class component {this.props.position}</h1>
                <button onClick={()=>this.changeName()}>Change name</button>
            </>
        )   
    }
}

export default ClassApp;