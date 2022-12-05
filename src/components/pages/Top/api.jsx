import axios from "axios";



export default () =>{
    const api = axios.create({
    
        baseURL: 'https://api.igdb.com/v4/games/'
    });
    return(
       
        <div>
            <h1>{api}</h1>
        </div>
    )
}