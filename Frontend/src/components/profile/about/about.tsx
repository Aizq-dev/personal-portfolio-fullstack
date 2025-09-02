import { useAppData } from "../../../utils/functions"
import "./about.css"

export const About=()=>{
    const {profile}=useAppData();

    return (
        <section>
            <p>{profile?.bio}</p>
        </section>
    )

}