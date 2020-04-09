import React from 'react';
import CustomChart from '../chart/CustomChart';
import {Pie} from 'react-chartjs-2';

const GlobalData = ({country})=>(
<div>
<CustomChart value={Pie} country={country}/>
</div>

)

export default GlobalData;