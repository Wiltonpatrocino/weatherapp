
export function Request({data, temp, icon}){

    return (
            <>
                <h2>{data.name}, {data?.sys?.country}</h2>
                <img id="icon" src={icon}/>
                <span>{temp}</span>
                <h3>{data?.weather?.[0]?.description}</h3>

                <ul>
                    <li> <strong>Win speed:</strong> {data?.wind?.speed} m/s</li>
                    <li> <strong>Clouds:</strong> {data?.clouds?.all} %</li>
                    <li> <strong>Preesure:</strong> {data?.main?.pressure} hPa</li>
                    <li> <strong>Humidity:</strong> {data?.main?.humidity} %</li>
                    <li> <strong>Tempe Max:</strong> {data?.main?.temp_max} ºC</li>
                    <li> <strong>Tempe Min:</strong> {data?.main?.temp_min} ºC</li>
                </ul>
                
            </>
    )

}

export default Request;