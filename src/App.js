import React from 'react';
import './App.css';
import GlobalData from './globalData/GlobalData';
import CountriesData from './countriesData/CountriesData';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      globalData:[],
      countries:[]

    }
  }
getData = async () =>{
  const data = await fetch('https://api.covid19api.com/summary');
  const allData = await data.json();
this.setState(()=>({
  
  globalData: allData.Global,
  countries: allData.Countries
}))
}



componentDidMount(){
  this.getData();
}

  render(){
    const {globalData, countries} = this.state;
    return (
      <div>
        <GlobalData country={globalData}/>
        <CountriesData countriesData={countries}/>

      </div>
    )
  }
}


export default App;
