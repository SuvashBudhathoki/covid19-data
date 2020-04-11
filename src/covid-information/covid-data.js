const data = {
    symptoms:{
        label:'Symptoms',
        options:['Cough', 'Fever', 'Tiredness', 'Difficulty breathing (severe cases)']
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
    },
    myths:{
        label:'Myths',
        options:[
            '5G mobile networks spread COVID-19',
            'Being able to hold breath for 10 seconds means you are free from COVID-19 ',
            'Drinking alcohol does not protect you against COVID-19',
            'Taking hot bath prevents the disease'
        ]
    }
    
    

    
}

const covidData = [];

for (const key in data){
    covidData.push(data[key])
}


export default covidData;