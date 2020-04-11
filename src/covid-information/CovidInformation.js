import React from 'react';
import './covid-information.styles.css'
import TabList from '../tablist/TabList';

const CovidInformation = ()=>(
    <div >
        <TabList>
            <div label="symptom">
                Covid symptoms
            </div>
            <div label="Prevention">
                Covid prevention
            </div>
            <div label="dos and don't">
                Covid dos and donts
            </div>
        </TabList>
    </div>
)


export default CovidInformation;