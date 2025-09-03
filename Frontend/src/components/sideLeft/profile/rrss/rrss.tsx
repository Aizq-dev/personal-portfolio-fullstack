
import { useAppData } from "../../../utils/functions"
import "./rrss.css"



export const Rrss=()=>{
const {profile}=useAppData()

const rrss = profile?.links
const contact = profile?.contact






return (
    <div className="rrss">
        {rrss?(<>
        <a href={`${rrss.github}`}>Github</a>
         <a href={`${rrss.linkedin}`}>Linkedin</a>       
        <p>{contact?.email}</p>
        
        
        </>):(
            <p>Cargando...</p>
        )}
    
    </div>
    )}