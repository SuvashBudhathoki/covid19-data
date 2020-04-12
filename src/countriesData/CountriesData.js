import React from 'react';
import CustomChart from '../chart/CustomChart';
import {Line} from 'react-chartjs-2';
import './countries-data.styles.css';

class CountriesData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedCountry:'',
        }
    }
handleChange = e =>{
    this.setState({
        selectedCountry : e.target.value
    })
}

    render(){
        const {selectedCountry, defaultData}= this.state;
        const {countriesData} = this.props;
        return(
<div >
    <select className="countries-data" onChange={this.handleChange}>
        <option> Select the country from the list</option>
       {countriesData.map(country=> <option key={country.CountryCode}>{country.Country}</option>)}
    </select>
    {!selectedCountry.includes('Select the country') && selectedCountry?(countriesData.map(country => selectedCountry === country.Country ? <CustomChart key={country.CountryCode} value={Line} country={country} />:"")):(<CustomChart value={Line} country={{ TotalDeaths: 0,
                TotalConfirmed:0,
            TotalRecovered:0 }}/>)}

    </div>
        )
    }
} 

export default CountriesData;

