import fetch from 'node-fetch';

function temperatuea(temp, body){
    let cold= 0;
    let warm = 0;
    let myPromise = new Promise (function(myReslove, myReject){

        for (var i=0; i < 3; i++) {
        var tempDay = parseInt(body.forecast[i].temperature.replace(/[^\d.-]/g,''))
        console.log('Dnia '+ i + ' temperatura wyniesie ' + tempDay + ' °C')
            if(tempDay <= temp){
                console.log(tempDay+'<='+temp)
                warm ++
            } else{ 
                cold++
            }
        }
    })

    myPromise.then(
        console.log('Bedzie ciepło '+ warm + ' dni'),
        console.log('Bedzie zimno '+ cold + ' dni')
    )
    
    
}

void(async () =>{
    const response = await fetch('https://goweather.herokuapp.com/weather/Wroclaw');
    const body = await response.json();
    let tempString ='-7 °C'
    console.log('Temperatura od której oceniamy czy jest ciepło czy zimno wynosi ' + tempString)
    var temp =parseInt(tempString.replace(/[^\d.-]/g,''))
    
    await temperatuea(temp,body)

})()


