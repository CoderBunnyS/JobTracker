import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import JobTableRow from './JobTableRow.js'
import CreateJobButton from './createJobButton.js'



export default class BoardColumn extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <>
      <Col xs={3}>
        <h5>{this.props.phaseName || 'Phase'}</h5>
        <div className="board-col">
        {/* <CreateJobButton /> */}

        <CreateJobButton phaseName={this.props.phaseName} openCreateModal={this.props.openCreateModal} />
        <Droppable droppableId={this.props.phaseName}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} classname="no-pad">
              {this.props.jobs.map((job, index) => (
                <JobTableRow
                  obj={job}
                  key={index}
                  index={index}

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
