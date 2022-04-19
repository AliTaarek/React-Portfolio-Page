import React from 'react';
import './AboutComponent.css'

class AboutComponent extends React.Component {

    render() {
        return(
            <>
                <div className="container mt-5">
                    <div className="row">
                        <p className="col-3 fs-1" id="about">About me</p>
                        <div className="col-8 text-start">
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                                lorem ipsum dolor sit amet, consectetur adipiscing 
                            </p>                       
                            <a className="btn btn-dark mt-3 border rounded-0 px-4 py-2" href="./bg1.jpg" download>Download resume</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default AboutComponent;