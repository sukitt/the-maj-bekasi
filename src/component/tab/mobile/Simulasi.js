import React from 'react'
import styled from 'styled-components'
import { Row, Col, FormControl } from 'react-bootstrap'

// import DropdownCicilan from '../DropdownCicilan'
// import DropdownKredit from '../DropdownKredit'
// import DropdownBunga from '../DropdownBunga'
import Base from './Base'
import NumberFormat from 'react-number-format'


export class Simulasi extends Base {
    constructor(props){
        super(props)
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
        console.log(event.target.value)
        if(!event.target.value){
            this.setState({interest:0})
        }else if(event.target.value > 100.00 || event.target.value <0){
            this.setState({interest:"cannot set interest more than 100.00"})
        }else{
            this.setState({interest:event.target.value});
            this.calcLoan()
        }
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
    
    render() {
        return (
            <D backgroundColor="#e9e9e9" padding="10%">
                <H2>Simulasi KPA {this.props.namaUnit}</H2>
                <H3>Estimasi Cicilan Bulanan</H3>
                <H1><NumberFormat value={this.state.annualEst} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></H1>

                <div style={{margin: "67px auto", maxWidth:800}}>
                    <Row>
                        <Col style={{marginBottom:"53px"}} ><P>Harga Unit</P></Col>
                        <Col style={{marginBottom:"53px"}}><P><NumberFormat value={this.props.hargaUnit} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                        
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>DP 20%</P></Col>
                        <Col style={{marginBottom:"53px"}}><P><NumberFormat value={this.state.dp} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Jumlah Pinjaman</P></Col>
                        <Col style={{marginBottom:"53px"}}><P><NumberFormat value={this.state.totalLoan} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    </Row>

                    {/* <Row>
                        <Col style={{marginBottom:"53px"}}><P>Cicilan DP</P></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownCicilan
                                value={this.state.cicilan}
                                // defaultValue={12}
                                onChange={(e) => this.setState({cicilan: e.target.value})}
                            />
                        </Col>
                    </Row> */}
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Tenor Kredit</P></Col>
                        <Col style={{marginBottom:"53px"}}>
                            {/* <DropdownKredit
                                value={this.state.options}
                                // defaultValue={1}
                                onChange={this.handleChangeCredits.bind(this)}
                            /> */}
                            <FormControl as="select" id="kredit" name="credit" onChange={this.handleChangeCredits.bind(this)} >
                                {this.state.options.length && this.state.options.map((index, i) => (
                                    <>
                                        <option key={i} value={index}>{index}</option>
                                    </>
                                ))}
                            </FormControl>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Bunga</P></Col>
                        <Col style={{marginBottom:"53px"}}>
                            {/* <DropdownBunga
                                value={this.state.bunga}
                                // defaultValue={5}
                                onChange={(e) => this.setState({bunga: e.target.value})}
                            /> */}
                            <FormControl type="number" maxLength="4" name="bunga" placeholder="eg: 5 or 5.2" onChange={this.handleChangeInterest.bind(this)} />
                        </Col>
                    </Row>
                </div>
            </D>
        )
    }
}

export default Simulasi


const D = styled.div(
    props => ({
        padding: props.padding,
        margin: props.margin,
        backgroundColor:  props.backgroundColor,
        /* backgroundColor: '#12284C', */
        // boxSizing: 'border-box',
        // border: '1px solid',
        height: "auto"
    })
)

const H1 = styled.h1(
    props => ({
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "2.125em",
        textAlign: 'center',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const H2 = styled.h2(
    props => ({
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "1.3750em",
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const H3 = styled.h3(
    props => ({
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "17px",
        textAlign: 'center',
        color: '#CC9980',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#000"
    })
)
