const data = {
    symptoms:{
        label:'Symptoms',
        options:['cough', 'fever']
    },
    do:{
        label: `Do's`,
        options:['Wash your hadns regularly for 20 seconds',
    'Cover your nose and mouth with a disposable tissue or flexed elbow when you sneeze or cough',
    'Avoid close contact with unwell people',
    'Stay home and self-isolate if feeling unwell'
    ]

    },
    donot:{
label:`Don't`,
options:['Touch your eyes, nose or mouth if your hands are not clean']
    }

    
}

const covidData = [];

for (const key in data){
    covidData.push(data[key])
}


export default covidData;