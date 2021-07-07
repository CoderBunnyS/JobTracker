import Col from 'react-bootstrap/Col'
import ViewMoreButton from './ViewMoreButton.js'


export default function Goals() {
  return (
    <Col xs={3}>
      <h5>Weekly Goals</h5>
      <div className={"board-col"} style={{background: '', paddingTop: ''}}>
        <ViewMoreButton link='#' text='Manage Goals'/>
        <Marker label='Exercise' percent='30%'/>
        <Marker label='Networking Events' percent='60%'/>
        <Marker label='Applications' percent='50%'/>
        <Marker label='Coding Practice' percent='80%'/>
      </div>
    </Col>
  )
}




function Marker ({label, percent}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px'

    }}>
    <p style={{width: '50%', fontFamily: '', fontSize: '18px', margin: '0'}}>{label}</p>
      <div style={{
        background: '#353535',
        flexGrow: '1',
        height: '20px',
        borderRadius: '400px'
      }}>
      <div style={{
        height: '100%',
        width: `${percent}`,
        borderRadius: '400px',
        background: `linear-gradient(90deg, #8FDD82 0%, #35AA8A 100%)`

      }}>

      </div>


      </div>
    </div>
  )
}
