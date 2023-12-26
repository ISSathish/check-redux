import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Addtask from './Addtask';
import Tasklist from './Tasklist';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <Header />
            <Addtask />
            <Tasklist />
          </Col>
        </Row>
       </Container>
    </div>
  );
}

export default App;
