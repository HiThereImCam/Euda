import { useRef, useState } from "react"
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarModal from "./Calendar";

const Modal = () => {
    const [calendarClick, setCalendarClick] = useState(false)
    const [resourceClick, setResourceClick] = useState(false)
    const [connectClick, setConnectClick] = useState(false)

    const modalRef = useRef()

    
    /**
        render icons and onClick set correct modal to true
     */
    return(
        <div id="modal-container">
         {/* <CalendarMonthIcon sz={18} onClick={() => setCalendarClick(true)} /> */}
         {calendarClick ? 
         <CalendarModal setCalendarClick={setCalendarClick} modalRef={modalRef}/> : 
         <button onClick={() => setCalendarClick(true)}>Click me please</button>} 
        </div> 
    )
}

export default Modal;

/*
    the issue
        - 
*/