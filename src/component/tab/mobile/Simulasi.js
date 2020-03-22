import React from 'react'
import styled from 'styled-components'
import { Row, Col, FormControl, Form } from 'react-bootstrap'

// import DropdownCicilan from '../DropdownCicilan'
// import DropdownKredit from '../DropdownKredit'
// import DropdownBunga from '../DropdownBunga'
import Base from './Base'
import NumberFormat from 'react-number-format'


export class Simulasi extends Base {
    constructor(props) {
        super(props)
        this.state = {
            dp: 0,
            totalLoan: 0,
            annualEst: 0,
            options: [],
            credit: 1,
            interest: 1,
        }
    }
    componentDidMount() {
        this.loop_credit()
        this.calcDp()
    }
    calcDp = () => {
        return (
            this.setState(
                { dp: this.props.hargaUnit * 20 / 100 }, () => {
                    this.calcLoan()
                }
            )
        )
    }
    calcLoan = () => {
        return (
            this.setState({ totalLoan: this.props.hargaUnit - this.state.dp }, () => {
                this.calcAnnualEst()
            })
        )
    }
    handleChangeInterest = (event) => {
        console.log(event.target.value)
        if (!event.target.value || event.target.value < 1) {
            this.setState({ interest: 0 })
        } else if (event.target.value > 100) {
            this.setState({ interest: "cannot set interest more than 100.00" })
        } else {
            this.setState({ interest: event.target.value });
            this.calcLoan()
        }
    }
    handleChangeCredits = (event) => {
        console.log(event.target.value)
        if (!event.target.value) {
            this.setState({ credit: 0 })
        } else if (event.target.value > 26 || event.target.value < 1) {
            this.setState({ credit: "error set credit" })
        } else {
            this.setState({ credit: event.target.value });
            this.calcLoan()
        }
    }
    calcAnnualEst = () => {
        this.setState({
            annualEst: Math.round(
                ((this.state.totalLoan * this.state.interest / 100 / 12) / (1 - (1 + (this.state.interest / 100 / 12)) ** (-this.state.credit * 12)) + Number.EPSILON) * 100
            ) / 100
        })
    }
    loop_credit = () => {
        for (let index = 1; index < 26; index++) {
            this.setState(prev => ({ options: [...prev.options, index] }))
        }
    }

    render() {
        return (
            <D backgroundColor="#e9e9e9" padding="0">
                <div className="text-center">
                    <H2>Simulasi KPA {this.props.namaUnit}</H2>
                    <H3>Estimasi Cicilan Bulanan</H3>
                    <H1 decimalSeparator="." value={this.state.annualEst} displayType={'text'} thousandSeparator={true} prefix={'IDR '} />
                </div>

                <div style={{ margin: "67px auto", maxWidth: 800 }}>
                    <Row>
                        <Col style={{ marginBottom: "53px" }} ><P>Harga Unit</P></Col>
                        <Col style={{ marginBottom: "53px" }}><P><NumberFormat value={this.props.hargaUnit} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>

                    </Row>
                    <Row>
                        <Col style={{ marginBottom: "53px" }}><P>DP 20%</P></Col>
                        <Col style={{ marginBottom: "53px" }}><P><NumberFormat value={this.state.dp} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    </Row>
                    <Row>
                        <Col style={{ marginBottom: "53px" }}><P>Jumlah Pinjaman</P></Col>
                        <Col style={{ marginBottom: "53px" }}><P><NumberFormat value={this.state.totalLoan} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></P></Col>
                    </Row>
                    <Row>
                        <Col style={{ marginBottom: "53px" }}><P>Tenor Kredit</P></Col>
                        <Col style={{ marginBottom: "53px" }}>
                            <Form.Group className="position-relative selectField" controlId="unitField">
                                <FormControl as="select" id="kredit" name="credit" onChange={this.handleChangeCredits.bind(this)} >
                                    {this.state.options.length && this.state.options.map((index, i) => (
                                        <>
                                            <option key={i} value={index}>{index}</option>
                                        </>
                                    ))}
                                </FormControl>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ marginBottom: "53px" }}><P>Bunga</P></Col>
                        <Col style={{ marginBottom: "53px" }}>
                            <FormControl type="number" maxLength="4" name="bunga" placeholder="eg: 5 or 5.2" onChange={this.handleChangeInterest.bind(this)} />
                        </Col>
                    </Row>
                    <Col>
                        <H6>* DP dapat dicicil. Angka yang tertera hanya untuk keperluan simulasi. Hubungi bank terkait untuk angka yang lebih akurat.</H6>
                    </Col>
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
        backgroundColor: props.backgroundColor,
        /* backgroundColor: '#12284C', */
        // boxSizing: 'border-box',
        // border: '1px solid',
        height: "auto"
    })
)

const H1 = styled(NumberFormat)`
    font-size: 34px;
    line-height: 41px;
    font-weight:bold;
    color : #000;
    font-family: 'Gilroy Bold' !important;
`;

const H2 = styled.h2(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#232323",
        textTransform: "uppercase",
        marginBottom: "37px",
    })
)

const H3 = styled.h3(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "17px",
        lineHeight: "22px",
        textAlign: "center",
        color: "#CC9980",
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
const H6 = styled.p`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    color: #000000;
    opacity: .5;
`;