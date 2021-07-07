import CompanyLogo from './CompanyLogo'
import Button from 'react-bootstrap/Button'

const validURL = url => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
}


export default function JobHeader ({ company, title, href }) {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'left',
        paddingBottom: '40px',
        borderBottom: '1px solid #f1f1f1',
        marginBottom: '20px',
        height: "120px"
      }}
    >
      <CompanyLogo companyName={company}/>
      <div style={{paddingLeft: '20px'}}>
        <h4 style={{marginBottom: '0'}}><strong>{company}</strong></h4>
        <p style={{marginBottom: '10px'}}>
          {title}

        </p>
        {href && validURL(href) && <Button href={href} target="_blank" size="sm" variant="outline-info">View Posting</Button>}
      </div>
    </div>

  )

}
