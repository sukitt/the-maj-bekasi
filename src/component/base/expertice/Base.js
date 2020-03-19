import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { BaseUrl } from '../../../services/axios'
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
});

const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');

export const ExperticeComponent = (props) => {
    const { store, errors } = props
    if (errors && Object.keys(errors).length) {
        return (
            <div>
                <h4>Errors in Blog Section</h4>
                <p>{errors.code}</p>
                <p>{errors.status}</p>
            </div>
        )
    }
    console.log(store)
    return (
        <>
            {store && store.map((data, i) => (
                <>  
                    <OnDesktop>
                        <BaseComponents key={i}
                            reverse={i % 2 ? true : false}
                            logo={BaseUrl + '/storage/' + data.logo}
                            description={data.description}
                            source={BaseUrl + '/storage/' + data.images.replace(/\\/g, "/")}
                        />
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <BaseComponentsMobile key={i}
                            logo={BaseUrl + '/storage/' + data.logo}
                            description={data.description}
                            source={BaseUrl + '/storage/' + data.images.replace(/\\/g, "/")}
                        />
                    </OnMobileAndTablet>
                </>
            ))}
        </>
    )
}
const BaseComponents = (props) => (
    <Container>
        <Row>
            {
                props.reverse ?
                    (
                        <>
                            <SecondCol {...props}/>
                            <FirstCol {...props}/>
                        </>
                    ) : (
                        <>
                            <FirstCol {...props}/>
                            <SecondCol {...props}/>
                        </>
                    )

            }
        </Row>
    </Container>
)
const BaseComponentsMobile = (props) => (
    <Container>
        <Col className="text-center"><Logo src={props.logo} alt="Company Logo" /></Col>
        <Col className="mb-5"><Background source={props.source} /></Col>
        <Col><P>{props.description}</P></Col>
    </Container>
)
const FirstCol = (props) => (
    <Col md={6}>
        <Logo src={props.logo} alt="Company Logo" />
        <P>{props.description}</P>
    </Col>
)
const SecondCol = (props) => (
    <Col md={6}>
        <Background source={props.source} />
    </Col>
)

const Container = styled.div`
    width:100%;
    height:auto;
    padding:100px 0px;
    border-bottom: 1px solid #C4C9D2;
`;

const Logo = styled.img`
    width:150px;
    margin-bottom:50px;
`;
const P = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #232323;
`;
const Background = styled.div`
    width:100%;
    height:331px;
    background: url(${props => props.source})
`;