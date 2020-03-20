import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import $ from 'jquery'

export default class BaseFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storeTitle: ["Title","Bapak", "Ibu"],
            title: "Title",
            name: "",
            email: "",
        }
    }
    
    render() {
        return (
            // add this ti validate
            // validated={this.props.validated}
            <Form onSubmit={this.props.onSubmit}>
                <Form.Row>
                    <Form.Group className="selectField" as={Col} xs="4">
                        <Form.Control 
                            size={this.props.size}
                            as='select'
                            ref={this.props.titleRef}
                            value={this.state.title}
                            onChange={e => this.setState({title: e.target.value})}
                            required={true}
                            // isInvalid={this.state.title === null? false: this.state.title.length? false: true}
                        >
                            {this.state.storeTitle && this.state.storeTitle.map((d, i) => (
                                <option key={i+1} value={d} disabled={d === "Title"}>{d}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Title
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} xs="8">
                        <Form.Control 
                            size={this.props.size}
                            type="text"
                            ref={this.props.nameRef}
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            placeholder="Fullname"
                            required={true}
                            // isInvalid={this.state.name === null? false: this.state.name.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} sm="12">
                        <Form.Control 
                            size={this.props.size}
                            type="email"
                            placeholder='Email address'
                            ref={this.props.emailRef}
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required={true}
                            // isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a valid Email Address
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                
                {this.props.children}
            </Form>
        )
    }
}