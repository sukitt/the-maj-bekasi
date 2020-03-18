import React, { useState } from 'react'
import { Row, Col, Toast, Button } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'
import styled from 'styled-components';

const Base = props => {
    const [show, setShow] = useState(true);
  
    const toggleShow = () => setShow(!show);
  
    return (
        <Toast show={show} onClose={toggleShow}>
            <Toast.Header>
                <img
                    src={Logo}
                    className="rounded mr-2"
                    style={{width: "20%"}}
                    alt=""
                />
                <strong className="mr-auto">Admin</strong>
            </Toast.Header> 
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    );
  }
  
  export default Base


  const Btn = styled.button(
      props => ({
          
      })
  )


//   <Row>
//   <Col xs={6}>
//     <Toast show={show} onClose={toggleShow}>
//       <Toast.Header>
//         <img
//           src="holder.js/20x20?text=%20"
//           className="rounded mr-2"
//           alt=""
//         />
//         <strong className="mr-auto">Bootstrap</strong>
//         <small>11 mins ago</small>
//       </Toast.Header>
//       <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//     </Toast>
//   </Col>
//   <Col xs={6}>
//     <Button onClick={toggleShow}>
//       Toggle Toast <strong>with</strong> Animation
//     </Button>
//   </Col>
// </Row>