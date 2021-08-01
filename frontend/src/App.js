import './App.css'
import {Component} from "react"
import AuthorList from "./components/Author"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': []
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/authors')
      .then(response => {
        this.setState({
          'authors': response.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <AuthorList authors={this.state.authors}/>
      </div>
    )

  }
}

export default App
