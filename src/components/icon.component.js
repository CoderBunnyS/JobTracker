export default function Icon({iconName, size, extraClass}) {
  return (
    <>
      <img
        src={`/icons/${iconName}.png`}
        className={`inlineIcon ${size} ${extraClass}`}
      />
    </>
  )
}
