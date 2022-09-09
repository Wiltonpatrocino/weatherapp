import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css'
import Request from './components/Request';
import Loading from './components/Loading';



function App() {
  const [data, setData] = useState({});

  const [temperature, setTemperature] = useState(false);

  const [isLoader, setIsLoader] = useState(true);

  
  useEffect(() =>{

    navigator.geolocation.getCurrentPosition(fetch, error);

  }, []);

  const fetch = (position) =>{
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3d8dde7b815d505c0b8c3f310a8b7490`).then(response => 
    setData(response.data))
    .finally(() => setIsLoader(false));

  }

   const error = () => {
        setIsError(true);
        setLoading(false);
    }
  
  const temp = temperature ? `${Math.floor(data?.main?.temp - 273)} ºC` : `${Math.floor(1.8 * (data?.main?.temp - 273) + 32)} ºF`;
  const icon = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`;

  document.body.style = `background: url("https://i.gifer.com/Lx0q.gif") no-repeat center center fixed;
  -webkit-background-size: cover;
  background-size: 100% 100%`;
  
  return (
    <>
    <div>{Loading}</div>
    <div className="Card" style={isLoader ? {display: 'none'} : {display: 'grid'}}>
      <h1>Wheather APP</h1>
      <Request data={data} icon={icon} temp={temp}  />
      <button onClick={()=> setTemperature(!temperature)}>Change to {temperature ? "ºF":"ºC"} </button>
    </div>
    </>
  )
}

export default App;

