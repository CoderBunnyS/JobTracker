import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import JobTableRow from './JobTableRow.js'
import CreateJobButton from './createJobButton.js'
import ViewMoreButton from './ViewMoreButton.js'
import Icon from './icon.component'
import IconColumnHeader from './IconColumnHeader'


export default class BoardColumn extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <>
      <Col style={{maxWidth: '400px'}}>
      <IconColumnHeader text={this.props.phaseName} icon={this.props.iconName} />

        <div className={"board-col " + this.props.phaseName.toLowerCase()}>
        {/* <CreateJobButton /> */}

        { this.props.fullDetail ?
          <CreateJobButton phaseName={this.props.phaseName} openCreateModal={this.props.openCreateModal} />
          : <ViewMoreButton link="job-list" text="View Jobs"/>
        }
        <Droppable droppableId={this.props.phaseName} >
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} classname="no-pad" style={{minHeight: '60vh'}}>
              {this.props.jobs.map((job, index) => (
                <JobTableRow
                  obj={job}
                  key={job._id}
                  index={index}
                  edit={() => this.props.edit(job._id, this.props.phaseName)}
                  fullDetail={this.props.fullDetail}

                  // JL={this}
                  // edit = {() => this.openEditModal(i)}
                  // remove={() => this.deleteItem(i)}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      </Col>
      </>
    );
  }
}
