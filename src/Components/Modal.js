import { useRef, useState } from "react"
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from "./Calendar";
import Connect from "./Connect";
import Learn from "./Learn";
import CalendarIcon from "../images/calendar-icon.svg";
import Book from "../images/book.svg";
import Conversation from "../images/conversation.png";

const Modal = () => {
    const [calendarClick, setCalendarClick] = useState(false)
    const [resourceClick, setResourceClick] = useState(false)
    const [connectClick, setConnectClick] = useState(false)

    const modalRef = useRef()

    
    /**
        render icons and onClick set correct modal to true
     */
    return(
        <div className="container">
            <div className="modal">
                {/* <CalendarMonthIcon sz={18} onClick={() => setCalendarClick(true)} /> */}
                {calendarClick && 
                <Calendar setCalendarClick={setCalendarClick} modalRef={modalRef}/> }
                {resourceClick && 
                <Learn setResourceClick={setResourceClick} modalRef={modalRef}/> }
                {connectClick && 
                <Connect setConnectClick={setConnectClick} modalRef={modalRef}/> }
            </div>
            <div className="buttons">
                <button onClick={() => setCalendarClick(true)}>
                    <img src={CalendarIcon} alt="calendar"/>
                Calendar</button>
                <button onClick={() => setResourceClick(true)}>
                <img src={Book} alt="calendar"/>
                Learn</button>
                <button onClick={() => setConnectClick(true)}>
                <img src={Conversation} alt="calendar"/>
                Connect</button>
            </div>

        </div> 
    )
}

export default Modal;

/*
    the issue
        - 
*/