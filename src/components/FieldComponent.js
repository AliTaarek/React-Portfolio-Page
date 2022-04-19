import React from "react";

class FieldComponent extends React.Component {

  render() {
    return (
      <>
        <div className="col">
            <div className={`card w-75 py-4 bg-${this.props.field.color}`}>
                <div className="card-body">
                    <p className="card-text text-white">{this.props.field.name}</p>
                    <hr className="w-50 m-auto"/>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default FieldComponent;
