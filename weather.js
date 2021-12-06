import fetch from 'node-fetch';

function temperatuea(temp, body){
    let myPromise = new Promise (function(myReslove, myReject){
    

        for (var i=0; i < 3; i++) {
        const tempDay = body.forecast[i].temperature.replace(/[^\d.-]/g,'')
        console.log('Dnia '+ i + ' temperatura wyniesie ' + tempDay + ' °C')
            if(tempDay>=temp){
                myReslove(' Bedzie chociaz raz ciepło! ')
            } else{ 
                myReject(' Bedzie zimno :( ')
            }
        }
    })

    myPromise.then(
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    )
}

void(async () =>{
    const response = await fetch('https://goweather.herokuapp.com/weather/Wroclaw');

    const body = await response.json();
    const tempString ='15 °C'
    console.log('Temperatura od której oceniamy czy jest ciepło czy zimno wynosi ' + tempString)
    const temp =tempString.replace(/[^\d.-]/g,'')
    
    await temperatuea(temp,body)

})()


