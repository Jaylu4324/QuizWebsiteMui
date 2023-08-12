import reacr from "react"
import Navbar from "./Navbar"
import Formcontrol from "./Formcontrol"
import Quiz from "./Quiz"
import Report from "./Report"
import { PropaneSharp } from "@mui/icons-material"


function page(props) {
    if (props.page == 1) {
        return (<>

            <Formcontrol pageChanger={props.pageChanger} pagebg={props.pagebg} font={props.font} setNameMethod={props.setNameMethod} />
        </>
        )
    } else if (props.page == 2) {
        return (<>
            <Quiz pageChanger={props.pageChanger} quizbg={props.quizbg} font={props.font} setresultMethod={props.setresultMethod} /></>)
    } else if (props.page == 3) {
        return (<Report result={props.result} pagebg={props.pagebg} font={props.font} name={props.name} />)
    }
}
export default page;