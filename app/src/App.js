import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';


function App() {

  const [names, setNames] = useState(["Bob", "Ron", "Alice"]);
  const [inputName, setInputName] = useState("");
  const [loser, setLoser] = useState();

  const handleSubmit = () => {
    setNames([...names, inputName]);
  }

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const pickALoser = () => {
    const randomInt = randomIntFromInterval(0, names.length-1);
    setLoser(loser => (names[randomInt]))
  }

  const removeName = (id) => {
    names.splice(id, 1)
    setNames(names => ([...names]));
  }

  return (
    <BrowserRouter>
      <Container className="p-3">
        <Row className="justify-content-md-center">
        <h1 className="header">Welcome To Choose a Loser</h1>
        </Row>
        <Row className="justify-content-md-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="NameInput">
            <Form.Label>
              <Form.Control type="text" value={inputName} placeholder="Enter a name" onChange={handleChange} />
            </Form.Label>
            <Button variant="primary" value="Add" onClick={() => handleSubmit()}>Add </Button>  
          </Form.Group>
        </Form>
        </Row>
        <Row className="justify-content-md-center">
          <ListGroup>
          {
            names.map((name, row_index) => {
              return (<ListGroup.Item key={row_index}>{name} <CloseButton onClick={() => removeName(row_index)} /></ListGroup.Item>);
            })    
          }
          </ListGroup>

          <Button variant="primary" onClick={pickALoser}>Pick a looser</Button>{' '}
          {loser &&
            <div>
              The loser is! {loser}
            </div>
          }
          </Row>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
