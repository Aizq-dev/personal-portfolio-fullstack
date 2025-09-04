
import { useAppData } from "../../../utils/functions"
//import "./profile.css" 




export const Profile=()=>{
const{ profile,loading,error} =useAppData()
if(loading)return <p>cargando</p>
 if (error){ 
    console.log(error)
}
 
if(!profile)return <p>sin datos</p>

return (
    <div className="flex items-center gap-5">
        {profile?(<>
        <img src={`${profile.avatar}`} className="w-36 rounded-full"/>
        
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
