import Button from 'react-bootstrap/Button'
import Icon from './icon.component.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function ViewMoreButton({link, iconName, text}) {
  return (
    <Link to={`/${link}`} style={{textDecoration: 'none'}}>
    <Button variant="dark"  className="add-new" style={{textAlign: 'right', marginBottom: '10px'}}>
      {
        iconName
        ? <Icon iconName={iconName}/>
        : <div></div>
      }
      <span>{text}</span>
      <div></div>
    </Button>
    </Link>

  )
}
