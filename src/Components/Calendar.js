import useOnClickOutside from "../Hooks/useOnClickOutside";
import CalImg from "../images/calendar.svg";

const Calendar = ({setCalendarClick, modalRef}) => {
    useOnClickOutside(modalRef, () => setCalendarClick(false))
    return(
        <div className="modalShape" ref = {modalRef}>
            <img src={CalImg} alt="calendar" className="resourcImg"/>
        </div>
    )
}

export default Calendar;
