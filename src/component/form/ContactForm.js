import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import $ from 'jquery'
import './form.css'


export default class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storeGelar: ["Gelar", "Bapak.", "Ibu."],
            storeUnit: ['Saya Ingin','Membeli Unit','Mendapatkan Info Lebih','Melihat Price List','Mengunduh E-Brosur'],
            gelar: "Gelar",
            nama: "",
            unit: "Saya Ingin",
            telepon: "",
            email: "",
            catatan: ""
        }
    }
    
    render() {
        return (
            // add this to validation
            // validated={this.props.validated}
            <Form id="contactUs" onSubmit={this.props.onSubmit}>
                <Form.Row>
                    <Form.Group className="selectField" as={Col} sm="2" controlId="gelarField">
                        <Form.Label for="gelar">Gelar*</Form.Label>
                        <Form.Control 
                            id="gelar"
                            as="select" 
                            value={this.state.gelar} 
                            ref={this.props.gelarRef} 
                            onChange={(e) => this.setState({gelar: e.target.value})}>
                            {this.state.storeGelar && this.state.storeGelar.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Gelar"}>{d}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm="4" controlId="namaField">
                        <Form.Label for="nama">Nama Lengkap Anda*</Form.Label>
                        <Form.Control
                            id="nama"
                            ref={this.props.namaRef}
                            type='text'
                            value={this.state.nama} 
                            onChange={(e) => this.setState({nama:e.target.value})} 
                            required
                            // isInvalid={this.state.nama === null? false: this.state.nama.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Harap Masukkan Nama Anda.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="selectField" as={Col} sm="6" controlId="unitField">
                        <Form.Label for="unit">Saya Ingin*</Form.Label>
                        <Form.Control 
                            id="unit"
                            as="select" 
                            ref={this.props.unitRef} 
                            onChange={(e) => this.setState({unit: e.target.value})}  
                            value={this.state.unit} 
                            required
                            // isInvalid={this.state.unit === null? false: this.state.unit.length? false: true}
                        >
                            {this.state.storeUnit && this.state.storeUnit.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Saya Ingin"}>{d}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Harap Pilih Salah Satu.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="6" controlId="teleponField">
                        <Form.Label for="nomor">Nomor Telepon Anda*</Form.Label>
                        <Form.Control
                            id="nomor"
                            ref={this.props.teleponRef}
                            type="tel"
                            inputMode="tel"
                            pattern="[0-9]{10,}"
                            value={this.state.telepon} 
                            onChange={(e) => this.setState({telepon: e.target.value})}
                            required
                            // isInvalid={this.state.telepon === null? false: this.state.telepon.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a Phone number. <br/> Format: (0-9)
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} sm="6" controlId="emailField">
                        <Form.Label for="email">Alamat Email Anda*</Form.Label>
                        <Form.Control 
                            id="email"
                            ref={this.props.emailRef}
                            type="email" 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required
                            // isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a valid Email Address
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="catatanField">
                        <Form.Label for="catatan">Catatan</Form.Label>
                        <Form.Control
                            id="catatan"
                            ref={this.props.catatanRef}
                            as="textarea" 
                            rows="3"
                            value={this.state.catatan}
                            onChange={(e) => this.setState({catatan: e.target.value})} 
                        />
                    </Form.Group>
                    {this.props.children}
                </Form.Row>
            </Form>
        )
    }
}

$(document).ready(function() {
    $("input, select, textarea").off().on("focus",function() {
        $(this.labels).addClass("filled")

        $(this).on("blur", () => { 
            if (!$(this)[0].value) {
                $(this.labels).removeClass("filled") 
            }
        })
        console.log($(this)[0].value)
    })
})
