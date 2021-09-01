import React, { Component } from 'react';

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
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.image}</p>
                <p>{this.props.description}</p>
                <p>{this.props.link}</p>
                <p>{this.props.github}</p>
            </div>
        )
    }
}

export default ProjectTile;
