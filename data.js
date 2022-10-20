 const fs = require('fs');
 const data =[

    {
        name:'sam',
        age: '45',
        address: 'wxystgsnk',
        email:'sam@gmail.com'
    }
 ]

 const jsonData= JSON.stringify(data);
 fs.writeFile('userapi.json',jsonData,(err)=>{
    console.log('done');
 });