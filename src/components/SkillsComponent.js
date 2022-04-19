import React from 'react';
import './SkillsComponent.css'
import SkillBarComponent from './SkillBarComponent';


class SkillsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            skills:[
                {name:"HTML",progress:"80%"},
                {name:"CSS",progress:"90%"},
                {name:"JavaScript",progress:"70%"},
                {name:"Python",progress:"100%"},
                {name:"NodeJs",progress:"60%"},
                {name:"React",progress:"50%"}
            ]
        }
    }

    render() {
        return(
            <>
                <div className="container mt-5 p-5" id="mainwrapper">
                    <div className="container-fluid">
                        <p className="fs-2 text-white" id="skills-p">Skills</p>
                        <p className="text-white text-center mx-5" id="skills-p2">
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                            lorem ipsum dolor sit amet, consectetur adipiscing 
                        </p>
                        <div className="row mt-5">
                            <div className="col-2 offset-1 text-white my-3">
                                <p>My Focus</p>
                                <hr/>
                                <ul className="list-inline text-start mx-3 my-2">
                                    <li>UI/UX Design</li>
                                    <li>Web Development</li>
                                    <li>Web Design</li>
                                    <li>App Development</li>
                                </ul>
                            </div>
                            <div className="col-8 mx-5 mb-4 d-flex flex-column align-items-center">
                                {this.state.skills.map(skill =>
                                    <SkillBarComponent key={skill.name} skill={skill}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SkillsComponent;