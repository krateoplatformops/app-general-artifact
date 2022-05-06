import React from 'react'

import Error from '../../UI/Error/Error'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    // MAYBE: You can also send the error to your error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          message={`Something went wrong! ${
            this.state.error && this.state.error.toString()
          }`}
          stack={this.state.errorInfo?.componentStack}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
