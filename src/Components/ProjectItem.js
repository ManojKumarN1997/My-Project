import React, { Component } from 'react'; 

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    
     
    return (
      <li className="project">  
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href ="#delete" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>  
      </li> 
    );
  }
}
/*ProjectItem.PropTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}*/
export default ProjectItem;
