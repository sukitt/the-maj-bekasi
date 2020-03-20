import React, { Component } from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { Row, Col, Form, InputGroup } from 'react-bootstrap'

export default class TabSimulasi extends Component {
    constructor(props){
        super(props);
        this.state = {
            dp:0,
            totalLoan:0,
            annualEst:0,
            options:[],
            credit:1,
            interest:1,
        }
    }

    componentDidMount(){
        this.loop_credit()
        this.calcDp()
    }
    calcDp = () => {
        return (
            this.setState(
                {dp:this.props.hargaUnit * 20 / 100}, () => {
                this.calcLoan()
            }
            )
        )
    }
    calcLoan = () =>{
        return(
            this.setState({totalLoan:this.props.hargaUnit - this.state.dp}, () => {
                this.calcAnnualEst()
            })
        )
    }
    handleChangeInterest = (event) => {
        if(!event.target.value || event.target.value < 1){
            this.setState({interest:1})
        }else if(event.target.value > 100){
            this.setState({interest:100})
        }else{
            this.setState({interest:event.target.value});
            this.calcLoan()
        }
        console.log(this.state.interest)
    }
    handleChangeCredits = (event) => {
        console.log(event.target.value)
        if(!event.target.value){
            this.setState({credit:0})
        }else if(event.target.value > 26 || event.target.value < 1){
            this.setState({credit:"error set credit"})
        }else{
            this.setState({credit:event.target.value});
            this.calcLoan()
        }
    }
    calcAnnualEst = () => {
        this.setState({
            annualEst:Math.round(
                    ((this.state.totalLoan * this.state.interest/100/12)/(1-(1+(this.state.interest/100/12))**(-this.state.credit*12))+Number.EPSILON)*100
                )/100
        })
    }
    loop_credit = () => {
        for (let index = 1; index < 26; index++) {
            this.setState(prev=>({options:[...prev.options,index]}))
        }
    }

    render(){
        return(
            <>
            <Container>
                <H3>Estimasi Cicilan Bulanan</H3>
                <H1 value={this.state.annualEst} displayType={'text'} thousandSeparator={true} prefix={'IDR '}  />
                <Row style={{marginTop:"74px"}}>
                    <Col md={3}><P>Harga Unit</P></Col>
                    <Col md={3}>
                        <P>
                            <NumberFormat value={this.props.hargaUnit} displayType={'text'} thousandSeparator={true} prefix={'IDR '} />
                        </P>
                    </Col>
                    <Col md={3}>
                        <P>Tenor Kredit</P>
                    </Col>
                    <Col style={{padding:"13px 0px"}} md={3}>
                        <Form.Group className="position-relative selectField" controlId="unitField">
                        <Form.Control as="select" id="kredit" name="credit" onChange={this.handleChangeCredits.bind(this)} >
                            {this.state.options.length && this.state.options.map((index, i) => (
                                <>
                                    <option key={i} value={index}>{index} Tahun</option>
                                </>
                            ))}
                        </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><P>DP 20%</P></Col>
                    <Col md={3}><P><NumberFormat value={this.state.dp} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    <Col md={3}><P>Bunga</P></Col>
                    <Col style={{padding:"13px 0px"}} md={3}>
                        <Form.Control type="number" maxLength="4" name="bunga" placeholder="0" onChange={this.handleChangeInterest.bind(this)} />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><P>Jumlah Pinjaman</P></Col>
                    <Col md={3}><P><NumberFormat value={this.state.totalLoan} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    <ColText>*DP dapat dicicil. Angka yang tertera hanya untuk keperluan simulasi. Hubungi bank terkait untuk angka yang lebih akurat.</ColText>
                </Row>
            </Container>
            </>
        )
    }
}
const Container = styled.div`
    padding:100px 100px 0px 100px;

`;
const ColText = styled(Col)`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    color: #000000;
    margin:16px 0px;
`;
const P = styled.p`
    margin:26px 0px;
    font-size: 17px;
`;
const H3 = styled.h3`
    color: #cc9980;
`;
const H1 = styled(NumberFormat)`
    font-size: 34px;
    line-height: 41px;
    font-weight:bold;
    color : #12284c;
    font-family: 'Gilroy Bold' !important;
`;
const Inputs = styled.div`
    margin: 26px auto;
`;