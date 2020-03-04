import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Base = props => {
  return (
    <div style={props.containerStyle}>
      <Row>
        {!props.reversed ? (
          <>
            <Column1 {...props} />
            <Column2 {...props} />
          </>
        ) : (
            <>
              <Column2 {...props} />
              <Column1 {...props} />
            </>
          )}
      </Row>
    </div>
  )
}

const Column1 = props => (
  <Col sm="6" style={{ alignSelf: props.alignCenter }}>
    {props.children}
    {props.owner}
  </Col>
)

const Column2 = props => (
  <Col sm="6">
    <div style={{
      width: props.imgWidth,
      height: props.imgHeight,
      backgroundImage: `url(${props.bgimage})`,
      borderRadius: 2
    }} />
  </Col>
)

export default Base