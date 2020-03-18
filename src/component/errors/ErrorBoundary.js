import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false,
             errorInfo: null,
        }
    }
    
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ 
            hasError: true,
            errorInfo: info
        });
        // You can also log the error to an error reporting service
        console.log(error, info);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return (
            <>
              <h4 className="text-center">Something When Wrong.</h4>
              <p>{this.state.errorInfo.componentStack}</p>
            </>
          )
        }
        return this.props.children;
      }
}

export default ErrorBoundary
