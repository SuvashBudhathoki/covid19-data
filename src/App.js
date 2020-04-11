import React from 'react';
import './App.css';
import GlobalData from './globalData/GlobalData';
import CountriesData from './countriesData/CountriesData';
import CovidInformation from './covid-information/CovidInformation'



class App extends React.Component{
  constructor(){
    super();
    this.state={
      globalData:[],
      countries:[],
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
      <div className='content'>
        <CovidInformation />
        <div className='data'>
          <div className="global-data">
        <GlobalData  country={globalData}/>
        </div>
        <div className="countries-data">
        <CountriesData countriesData={countries}/>
        </div>
        </div>
        

      </div>
    )
  }
}


export default App;
