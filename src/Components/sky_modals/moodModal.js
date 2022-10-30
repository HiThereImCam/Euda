import Grateful from "./Grateful";
const MoodModal = ({setMoodState}) => {
    /**
     * I imagine transitions
     *  - modal will ease-in? 
     * 
     * maybe make the modal to look elevated?
     */
    
    return(
     <div className="mood_modal-container">
        {/* <h4>How are you feeling today?</h4> */}
        <Grateful/>
     </div>   
    )
}

export default MoodModal;