import React from "react"

import Form from "./components/Form"
import Output from "./components/Output"

//class-based component vs functional component to utilise state:
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      destination : "",
      kosher : false,
      vegetarian : false,
      lactoseFree : false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    if (type === "checkbox") {
      this.setState(
        {
          [name] : checked
        }
      )
      console.log(checked)
    }
    else {
      this.setState(
        {
          [name] : value
        }
      )

    }
  }

  render() {
    return(
        <>
          {/* form to grab input dynamically: */}
          <Form
            state={this.state}
            handleChange={this.handleChange}
          />

          {/* displaying dynamically updated states: */}
          <Output
            state={this.state}
          />
        </>
    )
  }
}
export default App
