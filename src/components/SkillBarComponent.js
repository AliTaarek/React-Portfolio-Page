import React from "react";

class SkillBarComponent extends React.Component {
  
  render() {
    //let name = this.state.name;
    return (
      <>
        <div className="progress mt-3" style={{height: "30px",width:"650px"}}>
          <label className="text-white bg-dark text-center px-3 py-1">{this.props.skill.name}</label>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{width:this.props.skill.progress}}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >{this.props.skill.progress}</div>
        </div>
      </>
    );
  }
}

export default SkillBarComponent;
