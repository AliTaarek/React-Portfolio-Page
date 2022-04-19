import React from 'react';
import FieldComponent from './FieldComponent'
class PortfolioComponent extends React.Component {
    constructor(props) {
        super();
        this.state={
            fields:[
                {name:"Web Design",color:"secondary"},
                {name:"Mobile Design",color:"dark"},
                {name:"Logo Design",color:"secondary"},
                {name:"Web Application Development",color:"dark"},
                {name:"Mobile Application Development",color:"secondary"},
                {name:"PWA Development",color:"dark"}
            ]
        }
    }

    render(){
        return(
            <>
                <div className="container">
                    <h2 className="row text-start m-5" style={{fontFamily: "Georgia, serif",textShadow: "4px 4px 8px #0b0b0b"}}>Portfolio</h2>
                    <div className="row row-cols-1 row-cols-3 g-5 ms-5">
                        {this.state.fields.map(field=>
                            <FieldComponent key={field.name} field={field}/>
                        )}
                    </div>             
                </div>
            </>
        )
    }
}

export default PortfolioComponent;