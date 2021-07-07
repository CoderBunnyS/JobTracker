import Button from 'react-bootstrap/Button'
import Icon from './icon.component.js'

export default function CreateJobButton(props) {
  return (
    <Button variant="dark" onClick = {() => props.openCreateModal(props.phaseName)} className="add-new">
      <div><Icon iconName="add"/></div>
      <span>Add New</span>
      <div></div>
    </Button>

  )
}
