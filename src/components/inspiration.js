import Col from 'react-bootstrap/Col'
import IconColumnHeader from './IconColumnHeader'






export default function Inspiration () {
return (
  <Col xs={2}>
    <IconColumnHeader text="Inspiration" icon="sun" />

    <div className={"board-col"} style={{background: '', padding: '20px'}}>
      <h4 style={{ color: "", fontWeight: '', marginBottom: '40px'}}>Success is never final. Failure is never fatal. It is courage that counts.</h4>
      <p> - Winston Churchill </p>
    </div>
  </Col>
)
}
