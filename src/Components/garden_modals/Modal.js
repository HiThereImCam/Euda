import { useRef, useState } from "react"
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from "./Calendar";
import Connect from "./Connect";
import Learn from "./Learn";

import CalendarIcon from "../../images/Track_widget.png"
import Book from "../../images/Learn_widget.png";
import Conversation from "../../images/Connect_widget.png";


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

                <button className="icon" onClick={() => setCalendarClick(true)}>
                    <img src={CalendarIcon} alt="calendar"/></button>
                <button className="icon" onClick={() => setResourceClick(true)}>
                <img src={Book} alt="calendar"/></button>
                <button className="icon" onClick={() => setConnectClick(true)}>
                <img src={Conversation} alt="calendar"/></button>

            </div>

        </div> 
    )
}

export default Modal;

/*
    the issue
        - 
*/