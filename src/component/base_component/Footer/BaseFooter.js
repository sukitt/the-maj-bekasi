import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

export default class BaseFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storeTitle: ["Gelar","Bapak", "Ibu"],
            title: null,
            name: null,
            email: null,
        }
    }
    
    render() {
        return (
            // add this ti validate
            // validated={this.props.validated}
            <Form onSubmit={this.props.onSubmit} validated={this.props.validated}>
                <Form.Row>
                    <Form.Group className="selectField" as={Col} xs="4">
                        <Form.Control 
                            size={this.props.size}
                            as='select'
                            ref={this.props.titleRef}
                            value={this.state.title}
                            onChange={e => this.setState({title: e.target.value})}
                            required
                            isInvalid={this.state.title === null? false: this.state.title.length? false: true}
                        >
                            {this.state.storeTitle && this.state.storeTitle.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Gelar"}>{d}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Mohon Pilih Salah Satu
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} xs="8">
                        <Form.Control 
                            size={this.props.size}
                            type="text"
                            ref={this.props.nameRef}
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            placeholder="Nama Lengkap"
                            required
                            isInvalid={this.state.name === null? false: this.state.name.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Harap Masukan Nama Lengkap Anda
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="12">
                        <Form.Control 
                            size={this.props.size}
                            type="email"
                            placeholder='Alamat Email'
                            ref={this.props.emailRef}
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required
                            isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Harap Masukkan Alamat Email yang Valid
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                
                {this.props.children}
            </Form>
        )
    }
}