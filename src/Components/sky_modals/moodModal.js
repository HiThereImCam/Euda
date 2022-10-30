import lvl1 from "../../images/moods/moodlevel1.svg"
import lvl2 from "../../images/moods/moodlevel2.svg"
import lvl3 from "../../images/moods/moodlevel3.svg"
import lvl4 from "../../images/moods/moodlevel4.svg"
import lvl5 from "../../images/moods/moodlevel5.svg"


const MoodModal = ({setMoodState}) => {
    /**
     * I imagine transitions
     *  - modal will ease-in? 
     * 
     * maybe make the modal to look elevated?
     */
    
    return(
     <div className="mood_modal-container">
        <div className="header-container">
        <p className="welcome-header">Welcome Back!</p>
        <p className="question">How are we feeling today?</p>
        </div>

        <div className="mood-container" onClick={() => setMoodState(true)}>
            <img src={lvl1} alt="very sad"/>
            <img src={lvl2} alt="somewhat sad"/>
            <img src={lvl3} alt="neutral"/>
            <img src={lvl4} alt="somewhat happy"/>
            <img src={lvl5} alt="very happy"/>
        </div>
     </div>   
    )
}

export default MoodModal;