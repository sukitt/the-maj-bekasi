import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

export default class MobileContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gelar: "",
            nama: "",
            unit: "",
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
                    <Form.Group as={Col} xs="4" controlId="gelarField">
                        <Form.Control 
                            size="lg"
                            as="select"
                            value={this.state.gelar} 
                            defaultValue="Gelar" 
                            ref={this.props.gelarRef} 
                            onChange={(e) => this.setState({gelar: e.target.value})}>
                            <option selected disabled={this.state.gelar? 'disabled': null}>Gelar</option>
                        {this.props.storeGelar && this.props.storeGelar.map((d, i) => (
                            <option key={i+1} value={d.nama}>{d.nama}</option>
                        ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs="8" controlId="namaField">
                        <Form.Control
                            size="lg"
                            ref={this.props.namaRef}
                            type='text'
                            placeholder="Nama Lengkap Anda" 
                            value={this.state.nama} 
                            onChange={(e) => this.setState({nama:e.target.value})} 
                            required
                            // isInvalid={this.state.nama === null? false: this.state.nama.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="unitField">
                    <Form.Control 
                        size="lg"
                        as="select" 
                        ref={this.props.unitRef} 
                        onChange={(e) => this.setState({unit: e.target.value})}  
                        value={this.state.unit} 
                        required
                        // isInvalid={this.state.unit === null? false: this.state.unit.length? false: true}
                    >
                        <option selected disabled={this.state.unit? 'disabled': null}>Unit</option>
                        {this.props.storeUnit && this.props.storeUnit.map((d, i) => (
                            <option key={i+1} value={d.nama}>{d.nama}</option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please choose a Unit
                    </Form.Control.Feedback>
                </Form.Group>
                    <Form.Group controlId="teleponField">
                        <Form.Control 
                            size="lg"
                            ref={this.props.teleponRef}
                            type="tel"
                            inputMode="tel"
                            pattern="[0-9]{10,}"
                            placeholder="Nomor Telepon Anda" 
                            value={this.state.telepon} 
                            onChange={(e) => this.setState({telepon: e.target.value})}
                            required
                            // isInvalid={this.state.telepon === null? false: this.state.telepon.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a Phone number. <br/> Format: (0-9)
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="emailField">
                        <Form.Control 
                            size="lg"
                            ref={this.props.emailRef}
                            type="email" 
                            placeholder="Alamat Email Anda" 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required
                            // isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a valid Email Address
                        </Form.Control.Feedback>
                    </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="catatanField">
                        <Form.Control
                            size="lg"
                            ref={this.props.catatanRef}
                            as="textarea" 
                            placeholder="Catatan" 
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
