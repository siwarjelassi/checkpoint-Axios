import React from "react";

import axios from 'axios'
export default class App extends React.Component {
  state={  weatherData:"",
  id:"2172797"
}
 componentDidMount(){
  axios
  .get(`http://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&appid=d649d89801c1f83780cf1761470c4121`)
  .then(res=>this.setState({weatherData: res.data}) )
 }
  render(){
    const {main } = this.state.weatherData
    
    console.log("our state is "+ {main})
  return (
    <div className="App">
      <h1> The city is : {this.state.weatherData.name}</h1>
      <h2> Visibility :  {this.state.weatherData.visibility}</h2>
    </div>
  
  )}}
