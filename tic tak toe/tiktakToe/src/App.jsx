import React ,{useState} from 'react'

import Icons from './components/Icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Row, Col,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


const itemArray = new Array(9).fill("empty");

const App = () => {
  const [iscross,setIsCross]= useState(false);
  const [winningmessage,setWinningMessage] = useState("");

  const reloadgame = ()=>{
    //
  }

  const checkWinner = () => {
    //
  }

  const changeItem = (itemnumber) => {

  }

  return (
    <>
    <Container className='p-5'>
      <ToastContainer position='bottom-center' >
        <Row>
          <Col md={6} className='offset-md-3' >

            <div className='grid' >
              {itemArray.map((item,index)=>(
                <Card key={index}>
                  <CardBody className='box'>
                    <Icons name={item} />

                  </CardBody>
                </Card>
              ))}

            </div>
          </Col>
        </Row>

      </ToastContainer>

    </Container>
        <Icons/>
    </>
  )
}

export default App
