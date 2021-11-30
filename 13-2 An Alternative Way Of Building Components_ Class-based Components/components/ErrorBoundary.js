import { Component } from "react";

class ErrorBoundary extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            hasError: false
        }
    }
    componentDidCatch(error)
    {
        console.log(error)
        this.setState({hasError: true})
    }
    render()
    {
        if(this.state.hasError)
        {
            console.log('error')
            return <p>Something went wrong!</p>
        }
        else
        {
            console.log('no error')
            return this.props.children
        }
    }
}
export default ErrorBoundary;