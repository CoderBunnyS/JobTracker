import CompanyLogo from './CompanyLogo'

export default function JobHeader ({ company, title }) {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'left',
        paddingBottom: '20px',
        borderBottom: '1px solid #f1f1f1',
        marginBottom: '20px',
        height: "100px"
      }}
    >
      <CompanyLogo companyName={company}/>
      <div style={{paddingLeft: '20px'}}>
        <h4 style={{marginBottom: '0'}}><strong>{company}</strong></h4>
        <p>{title}</p>
      </div>
    </div>

  )

}
