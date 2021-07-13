import Col from 'react-bootstrap/Col'
import ViewMoreButton from './ViewMoreButton.js'
import IconColumnHeader from './IconColumnHeader'



export default function Contacts() {
  return (
    <Col xs={2}>
      <IconColumnHeader text="Contacts" icon="contact" />

      <div className={"board-col"} style={{background: '', paddingTop: ''}}>
        <ViewMoreButton link='#' text='View Contacts'/>
        <Contact name="Timmi Phinnessy" position="VP Sales" company="Talane" />
        <Contact name="Renell Fussen" position="Food Chemist" company="Roodel" />
        <Contact name="Bealle Battaille" position="Design Engineer" company="Blogspan" />
        <Contact name="Tonia Andriessen" position="Product Management" company="Fivespan" />




      </div>
    </Col>
  )
}




function Contact ({name, position, company}) {
  return (
    <div style={{
      alignItems: 'center',
      marginBottom: '10px',

    }} className="contact">
    <p><strong>{name}</strong></p>
    <p>{position}, {company}</p>



      </div>

  )
}
