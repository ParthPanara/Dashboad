import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
export default function Card() {
    const sensor = [
        { "name": "Smoke Sensor", "url": "https://internshippro.000webhostapp.com/smokesensor.php", "value": 300 },
        { "name": "PIR Sensor", "url": "https://internshippro.000webhostapp.com/pir.php", "value": 300 },
        { "name": "IR Sensor", "url": "https://internshippro.000webhostapp.com/ir.php", "value": 300 },
        { "name": "Flame Sensor", "url": "https://internshippro.000webhostapp.com/flamesensor.php", "value": 300 },
        { "name": "LDR Sensor", "url": "https://internshippro.000webhostapp.com/ldr.php", "value": 300 },
        { "name": "Soil-Moisture Sensor", "url": "https://internshippro.000webhostapp.com/soilmoisture.php", "value": 300 },
        { "name": "Temperature Sensor", "url": "https://internshippro.000webhostapp.com/temperature.php", "value": 300 },
        { "name": "Ultrasonic Sensor", "url": "https://internshippro.000webhostapp.com/ultrasonic.php", "value": 300 },
        { "name": "Humidity Sensor", "url": "https://internshippro.000webhostapp.com/temperature.php", "value": 300 }
    ]
    return (
        <>
            {
                sensor.map(
                    (newdata, i) => {
                        return (
                            <div className="col-md-4 market-update-gd cards1" id="card" style={{ marginBottom: '10px' }}>
                                <div className="market-update-block clr-block-1" style={{height:'150px'}}>
                                    <Innercard name1={newdata.name} url1={newdata.url} value1={newdata.value} key={i} />
                                </div>
                            </div>

                        );
                    }
                )
            }
        </>
    )

}


function Innercard(props) {
    
    const [data,setData] = useState([])
    useEffect(
        ()=>{
            fetch(props.url1)
            .then(res=>res.json())
            .then(json=>setData(json.smoke));
        }
    ,[])
    
    let data1;
    let  col ;
    for(let i=0;i<data.length;i++){
        col=props.name1.replace(" Sensor","_Value")
        data1=data[i][col]
        break
    }
    
    let warning = "";
    if (data1 >= props.value1) {
        warning = "Its not safe."
        document.getElementById("card").style.color = "red";
        let message = `Warning !!! Your ${props.name1}'s value is ${data1} it is too high for normal reading. It is not safe. So, Plaese GET OUT, STAY OUT. `
        let email = "jashp0707@gmail.com,jashhpatell@gmail.com"
        var templateParams = {
            user_email: email,
            message: message
        };


        emailjs.send('service_be80owc', 'template_5mltam8', templateParams, 'V-TQ-jImTPrOA-A9I')
            .then((result) => {
                console.log(result.text);



            }, (error) => {
                console.log(error.text);

            });
    }
    else {
        warning = "No need to worry."
    }
    return (
        <>
            <div className="col-md-8 market-update-left" >
                
                <h3>{props.name1}</h3>
                <h4 style={{fontSize:'200%'}}>{warning}</h4>
            </div>
            <div className="col-md-4 market-update-right" style={{backgroundColor:'white',borderRadius:'50%',height:'70px',width:'70px',display:'flex',alignItems:'center',textAlign:'center'}}>
                <h3 style={{color:'#68ae00',fontWeight:'bold'}}>{data1}</h3>
            </div>
            <div className="clearfix"> </div>
        </>
    )
}