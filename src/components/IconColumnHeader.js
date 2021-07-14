import Icon from './icon.component'

export default function IconColumnHeader ({text, icon}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
    {icon ? <div><Icon iconName={icon}/></div>  : <div></div>}
    <h5>{text}</h5>
    <div></div>
    </div>
  )
}
