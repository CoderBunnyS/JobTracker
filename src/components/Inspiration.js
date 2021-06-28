import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Inspiration = (props) => {
    return (
        <div>

        <Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: '3rem',
            fontWeight: 'bolder',
        }}
        >Inspiration
        </Row>
        <div className="home-container-4">
            Inspirational Quotes Here
        </div>
        </div>
    );
}

export default Inspiration;