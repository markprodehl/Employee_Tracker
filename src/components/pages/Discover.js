import React from "react";
import axios from "axios";

class Discover extends React.Component {
  state = {
    url: ""
  }
  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then ((result) => {
      console.log(result)
      this.setState({ url: result.data.message} )
    
    })
  }
  render() {
    return(<div>
      <img src={this.state.url}/> 
      
    </div>)
  
    
  }
}


export default Discover;
