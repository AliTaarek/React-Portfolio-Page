import React from 'react';
import './HeroComponent.css'

class HeroComponent extends React.Component {
    render() {
        return (
            <>
                <div className="container" id="main">
                    <div className="row justify-content-start">
                        <div className="col-6 mt-5 p-5">
                            <p className="fs-1 fw-bold text-white font-monospace">Ali Tarek</p>
                            <p className="fs-3 text-white font-monospace">Web Developer & Designer</p>
                            <button className="btn btn-muted text-white border border-white mt-3">Contact me</button>
                        </div>
                    </div>
                </div> 
            </>
        )   
    }
}

export default HeroComponent;