
import { useAppData } from "../../utils/functions"
import "./profile.css" 




export const Profile=()=>{
const{ profile,loading,error} =useAppData()
if(loading)return <p>cargando</p>
 if (error){ 
    console.log(error)
}
 
if(!profile)return <p>sin datos</p>

return (
    <div className="profile">
        {profile?(<>
        <img src={`${profile.avatar}`} className="avatar"/>
        
        <div className="avatar_name">
        <h1>{profile.name}</h1>
        
        <h2>{profile.title}</h2>
        <p>{profile.slogan}</p>
        </div>
        </>):(
            <p>Cargando...</p>
        )}
    
    </div>
    
)}
