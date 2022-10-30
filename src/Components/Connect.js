import useOnClickOutside from "../Hooks/useOnClickOutside";
import BetterHelp from "../images/betterhelp.png";
import CrisisCon from "../images/crisisconnections.png";

const Connect = ({setConnectClick, modalRef}) => {
    useOnClickOutside(modalRef, () => setConnectClick(false))
    return(
        <div className="modalShape" ref = {modalRef}>
        <section>
            <div>
                <h3>Sometimes life is tough. You don’t need to go it alone. For further support, check out the resources below.</h3>
            </div>
            <div className="grid">
            <div className="resources">
                <img src={BetterHelp} alt="resource1" className="resourcImg"/>
                <div className="textContainer">
                    <p>Better Help is a a mental health platform that provides online mental health services via video chat. BetterHelp professionals are all licensed and credentialed therapists.</p>
                </div>
            </div>

            <div className="resources">
                <img src={CrisisCon} alt="resource2" className="resourcImg"/>
                <div className="textContainer">
                    <p>Crisis Connections provides immediate help to individuals, families, and friends of people in emotional crisis. We can help you determine if you or your loved one needs professional consultation and we can link you to the appropriate services.</p>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default Connect;