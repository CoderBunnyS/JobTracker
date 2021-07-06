import Button from 'react-bootstrap/Button'
import Icon from './icon.component.js'

export default function CreateJobButton(props) {
  return (
    <Button onClick = {() => props.openCreateModal(props.phaseName)} className="add-new">
      <Icon iconName="add"/>Add New
    </Button>

  )
}
