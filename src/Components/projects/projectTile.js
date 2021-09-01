import React, { Component } from 'react';
import "../../css/projectTile.css";
import github from "../../img/github.png";


/*
A tile should have:
- Project title
- An image link to use
- a short description
- a follow link
- github (can be the same as follow link)
*/
class ProjectTile extends Component {

    render() {
        return (
            <a href={this.props.link} class="tile">
            <div class="tile">
                <h3>{this.props.title}</h3>
                <img src={this.props.image} alt=""/>
                <p>{this.props.description}</p>
                <a href={this.props.github}>
                    <img class="github" src={github} alt="github"/>
                </a>
            </div>
            </a>
        )
    }
}

export default ProjectTile;
