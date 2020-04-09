import React from 'react';

class CustomChart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            chartData:{
                    
                labels:['Total Deaths', 'Total Recovered', 'Total Confirmed'],
                datasets:[{
                    label: 'covid19 cases',
                    backgroundColor:['yellow'],
                    borderWidth: 1,
                    data: [this.props.country.TotalDeaths , this.props.country.TotalRecovered ,this.props.country.TotalConfirmed],
    
                }]
                
            }
    
           ,
            chartType:this.props.value,
            countryName: this.props.country.Country ? this.props.country.Country : "Global" 
            

        }
    }


UNSAFE_componentWillReceiveProps(props){
        this.getChartData(props)
    }

getChartData = (props)=>{
    this.setState(({
        chartData:{
                    
            labels:['Total Deaths', 'Total Recovered', 'Total Confirmed'],
            datasets:[{
                label: 'covid19 cases',
                backgroundColor:['yellow','red','green'],
                borderWidth: 1,
                data: [props.country.TotalDeaths  , props.country.TotalRecovered ,props.country.TotalConfirmed],

            }]
            
        }

       
    }))
}



    static defaultProps={
        displayTitle:true,
        displayLegend:true
    }
    render(){
        console.log(this.props.country.TotalDeaths)
        

        return (
            <div>
                <this.state.chartType data={this.state.chartData} height={50}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:this.state.countryName
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:'right'
                    }
                }}
                />
            </div>
        )
    }
}

export default CustomChart;

