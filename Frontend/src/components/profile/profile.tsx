import { fetchData } from "../../utils/fetchapi"
import "./profile.css" 

const profile = "este sera el perfil"

const profileData = fetchData("profile");
console.log(profileData)
export const Profile= ()=>{
return (
    <div>
    <p>Hola mundo {profile}jeje</p>
    </div>
    
)}