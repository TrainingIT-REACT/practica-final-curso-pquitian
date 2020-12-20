import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            error: true
        }
    }

    componentDidCatch(error, info) {
        // Para gestionar los errores
    }

    render() {
        if (this.state.error === true) {
            return <h1>Ha habido un error</h1>
        }
        return this.props.children;
    }
};

export default ErrorBoundary;