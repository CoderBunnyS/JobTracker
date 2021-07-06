export default function CompanyLogo ({ companyName }) {
  return (
    <>
    <div
      style ={{
      width: "50px",
      height: "50px",
      borderRadius: '10px',
      backgroundColor: '#c4c4c4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      }}

    >
      <img
        style={{
          width: '50%',
        }}
        // width="500px"
        src={`/images/logos/${companyName}.png`}
        onError={(e) => {
          e.target.src = `/images/logos/blank.png`
        }}
      />

    </div>
     </>
  )
}
