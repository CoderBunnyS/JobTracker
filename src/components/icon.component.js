export default function Icon({iconName, size}) {
  return (
    <>
      <img
        src={`/icons/${iconName}.png`}
        className={`inlineIcon ${size}`}
      />
    </>
  )
}
