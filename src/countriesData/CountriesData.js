import React from 'react';
import CustomChart from '../chart/CustomChart';
import {Line} from 'react-chartjs-2'

class CountriesData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedCountry:''

        }
    }
handleChange = e =>{
    this.setState({
        selectedCountry : e.target.value
    })
}

    render(){
        const {selectedCountry}= this.state;
        const {countriesData} = this.props;
        return(
<div>
    <select onChange={this.handleChange}>
       {countriesData.map(country=> <option key={country.CountryCode}>{country.Country}</option>)}
    </select>
    {selectedCountry?(countriesData.map(country => selectedCountry === country.Country ? <CustomChart key={country.CountryCode} value={Line} country={country} />:"")):("")}

    </div>
        )
    }
} 

export default CountriesData;

