import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const BaseTentangKami = props => {
    return (
        <div style={props.containerStyle}>
            <ParaghraphContainer>
                <Paraghraph>
                    {props.contentString}
                </Paraghraph>
            </ParaghraphContainer>
        </div>
    )
}

const Paraghraph = styled.p`
    font-family: Proxima Nova Book;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: justify;
    color: #000000;
`;
const ParaghraphContainer = styled.div`
    column-count: 2;
    column-gap: 30px;
    max-width: 800px;
    margin: 0px auto;
`;

export default BaseTentangKami
