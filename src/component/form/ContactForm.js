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
            gelar: null,
            nama: null,
            unit: null,
            telepon: null,
            email: null,
            catatan: null,
        }
    }
    render() {
        return (
            // add this to validation
            <Form id="contactUs" onSubmit={this.props.onSubmit} validated={this.props.validated}>
                
                <Form.Row>
                    <Form.Group className="selectField" as={Col} sm="2">
                        <Form.Label htmlFor="gelar">Gelar*</Form.Label>
                        <Form.Control 
                            id="gelar"
                            as="select" 
                            required
                            value={this.state.gelar} 
                            ref={this.props.gelarRef} 
                            // isInvalid={this.state.gelar === null? false: this.state.gelar.length? false: true}
                            onChange={(e) => this.setState({gelar: e.target.value})}
                        >
                            <option key={'empty'} value={''}></option>
                            {this.state.storeGelar && this.state.storeGelar.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Gelar"}>{d}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm="4">
                        <Form.Label htmlFor="nama">Nama Lengkap Anda*</Form.Label>
                        <Form.Control
                            id="nama"
                            ref={this.props.namaRef}
                            type='text'
                            value={this.state.nama} 
                            onChange={(e) => this.setState({nama:e.target.value})}
                            // isInvalid={this.state.nama === null? false: this.state.nama.length? false:true}
                            required
                            // defaultValue={this.state.defaultValueName}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            Harap Masukkan Nama Anda.
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className="selectField" as={Col} sm="6">
                        <Form.Label htmlFor="unit">Saya Ingin*</Form.Label>
                        <Form.Control 
                            id="unit"
                            as="select"
                            value={this.state.unit} 
                            ref={this.props.unitRef} 
                            required
                            // isInvalid={this.state.unit === null? false: this.state.unit.length? false: true}
                            onChange={(e) => this.setState({unit: e.target.value})}
                        >
                            <option key={'empty'} value={''}></option>
                            {this.state.storeUnit && this.state.storeUnit.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Saya Ingin"}>{d}</option>
                            ))}
                        </Form.Control>
                        {/* <Form.Control.Feedback type="invalid">
                            Harap Pilih Salah Satu.
                        </Form.Control.Feedback> */}
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="6">
                        <Form.Label htmlFor="nomor">Nomor Telepon Anda*</Form.Label>
                        <Form.Control
                            id="nomor"
                            ref={this.props.teleponRef}
                            type="tel"
                            inputMode="tel"
                            pattern="[0-9]{10,}"
                            value={this.state.telepon}
                            required
                            // defaultValue={this.state.defaultValuePhone}
                            onChange={(e) => this.setState({telepon: e.target.value})}
                            // isInvalid={this.state.telepon === null? false: this.state.telepon.length?false:true}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            Please insert a Phone number. <br/> Format: (0-9)
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                        <Form.Label htmlFor="email">Alamat Email Anda*</Form.Label>
                        <Form.Control 
                            id="email"
                            ref={this.props.emailRef}
                            type="email" 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required
                            // defaultValue={this.state.defaultValueEmail}
                            // isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            Please insert a valid Email Address
                        </Form.Control.Feedback> */}
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="12">
                        <Form.Label htmlFor="catatan">Catatan (opsional)</Form.Label>
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
