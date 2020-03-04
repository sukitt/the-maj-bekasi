import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Base = props => {
    return (
        <div style={props.containerStyle}>
            <Row>
                {!props.reversed? (
                <>
                    <Column1 {...props} />
                    <Column2 {...props} />
                </>
                ): (
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
    <Col sm="6" style={{alignSelf: 'center'}}>
        {props.children}
    </Col>
)

const Column2 = props => (
    <Col sm="6">
        <div style={{
            width: 539,
            height: 340,
            backgroundImage: `url(${props.bgimage})`,
            borderRadius: 2
        }}/>
    </Col>
)

export default Base
