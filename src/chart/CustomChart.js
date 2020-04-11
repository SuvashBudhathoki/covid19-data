import React from 'react';

class CustomChart extends React.Component{


    constructor(props){
        super(props);
        this.state={
            
            
            
                chartData:{
                        
                    labels:['Total Confirmed', 'Total Recovered', 'Total Deaths'],
                    datasets:[{
                        label: 'covid19 cases',
                        backgroundColor:['yellow'],
                        borderWidth: 1,
                        data: [this.props.country.TotalConfirmed , this.props.country.TotalRecovered ,this.props.country.TotalDeaths],
        
                    }]
                    
                }
        
               ,
                chartType:this.props.value,
                countryName: this.props.country.Country ? this.props.country.Country : "Global" 
                
    
            }
    }


componentDidUpdate(prevPprops)
{
    if(prevPprops.country.TotalDeaths !== this.props.country.TotalDeaths || prevPprops.country.TotalConfirmed !== this.props.country.TotalConfirmed || prevPprops.country.TotalRecovered !== this.props.country.TotalRecovered ){
        this.getChartData(this.props)
    }
    
}

getChartData = ()=>{
    this.setState(({
        chartData:{
                    
            labels:['Total Confirmed', 'Total Recovered', 'Total Deaths'],
            datasets:[{
                label: 'covid19 cases',
                backgroundColor:['lightblue','lightgreen','red'],
                borderWidth: 1,
                data: [this.props.country.TotalConfirmed  , this.props.country.TotalRecovered ,this.props.country.TotalDeaths],

            }]
            
        }

       
    }))
}

    static defaultProps={
        displayTitle:true,
        displayLegend:true
    }
    render(){
        
        return (
            <div>
                <this.state.chartType data={this.state.chartData} height={125}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:this.state.countryName
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:'bottom'
                    }
                }}
                />
            </div>
        )
    }
}

export default CustomChart;




