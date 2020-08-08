// import react and state
import React, {useState} from 'react';

/* import plugins */
// react-toastify for toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-strap for bootstrap 4 in react
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// custom styles
import './App.css';

// import components
import Icon from './components/Icon';

// array for the nine boxes of tic tac toe
const itemArray =  new Array(9).fill("empty");

const App = () => {

  /**
   * This app uses two states.
   * 1. state of changing empty to cross or circle
   * 2. state of rendering a win message
   */
  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  /**
   * reloadGame will reset all the states to its default aspect
   * Reset itemArray with 'empty'
   */
  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    itemArray.fill("empty", 0, 9);
  }

  // Win logic
  const checkIsWinner = () => {
    if(
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
      ) {
        setWinMsg(`${itemArray[0]} won`)
      } else if (
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5] &&
        itemArray[3] !== "empty"
      ) {
        setWinMsg(`${itemArray[3]} won`)
      } else if (
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8] &&
        itemArray[6] !== "empty"
      ) {
        setWinMsg(`${itemArray[6]} won`)
      } else if (
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6] &&
        itemArray[0] !== "empty"
      ) {
        setWinMsg(`${itemArray[0]} won`)
      } else if (
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7] &&
        itemArray[1] !== "empty"
      ) {
        setWinMsg(`${itemArray[1]} won`)
      } else if (
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8] &&
        itemArray[2] !== "empty"
      ) {
        setWinMsg(`${itemArray[2]} won`)
      } else if (
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8] &&
        itemArray[0] !== "empty"
      ) {
        setWinMsg(`${itemArray[0]} won`)
      } else if (
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6] &&
        itemArray[2] !== "empty"
      ) {
        setWinMsg(`${itemArray[2]} won`)
      }
  };

  // Change circle to cross
  const changeItem = itemNumber => {
    if (winMsg) {
      return toast(winMsg, {type: "success"});
    }
    
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", {type: "error"});
    }

    checkIsWinner();

  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
        {winMsg ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMsg}
            </h1>
            <Button color="success" block onClick={reloadGame}>Reload</Button>
          </div>
        ) : (
          <h1 className="text-warning text-uppercase text-center">
            {isCross ? "Cross" : "Circle"}'s turn
          </h1>
        )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color="warning">
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
