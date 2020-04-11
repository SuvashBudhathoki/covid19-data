import React from 'react';
import './covid-information.styles.css'
import TabList from '../tablist/TabList';
import image from './images.jpeg';
import covidData from './covid-data';

const CovidInformation = ()=>(
    <div className='container'>
    <div className='card-container'>
    <TabList>    
    {covidData.map((data, index)=> <div key={index} label={data.label}> 
        <ul>
            {data.options.map((option,index)=><li key={index}>{option}</li>)}
        </ul>
        </div>
    )}
    </TabList>

</div>

        <div className='image-container'>
            <img className='image' src={image} alt='covid19 update' />
           
        </div>
    </div>
)


export default CovidInformation;



