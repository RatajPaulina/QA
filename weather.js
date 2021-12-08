import fetch from 'node-fetch';

function temperatuea(temp, body){
    let cold= 0;
    let warm = 0;
    let myPromise = new Promise (function(myReslove){

        for (var i=0; i < 3; i++) {
            const tempDay = parseInt(body.forecast[i].temperature.replace(/[^\d.-]/g,''))
            console.log('Dnia '+ i + ' temperatura wyniesie ' + tempDay + ' °C')
                if(tempDay>=temp){
                    myReslove(' Z tego wynika, ze bedzie chociaz raz ciepło! ')
                    warm ++
                } else{ 
                    //console.log(' Bedzie zimno :( ')
                    cold ++
                }
            }
        })
    
        myPromise.then(
            function(myReslove) {console.log(myReslove);},
            console.log('Bedzie ciepło '+ warm + ' dni'),
            console.log('Bedzie zimno '+ cold + ' dni' + '\n')
        )
    
}

void(async () =>{
    //const response = await fetch('https://goweather.herokuapp.com/weather/Wroclaw');
    const response = await fetch('https://goweather.herokuapp.com/weather/Curitiba');
    const body = await response.json();
    let tempString ='16 °C'
    console.log('Temperatura od której oceniamy czy jest ciepło czy zimno wynosi ' + tempString +'\n')
    var temp =parseInt(tempString.replace(/[^\d.-]/g,''))
    
    await temperatuea(temp,body)

})()


