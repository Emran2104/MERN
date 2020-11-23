import React, {Component} from "react"


export default class App extends Component {
  constructor() {
    super()
    this.state = ({
      message: ""
    })
  }

  componentDidMount() {
    fetch("/users/", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
          })
          .then(res => res.json())
          .then((data) => { 
              console.log(data)
              this.setState({
                message: data.msg
              })
            })
    
  }

  render() {
    return (
      <div>
        App 1 
        {this.state.message}
      </div>
    )
  }
}
