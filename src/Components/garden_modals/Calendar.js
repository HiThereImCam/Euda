import useOnClickOutside from "../../Hooks/useOnClickOutside"
import CalImg from "../../images/calendar.svg";
import TimeLine from "../../images/updatedmg_garden_model_timeline.png";

const Calendar = ({setCalendarClick, modalRef}) => {
    useOnClickOutside(modalRef, () => setCalendarClick(false))
    return(
        <div className="modalShape" ref = {modalRef}>
          <div className="calendar-timeline-container">
            <img src={CalImg} alt="calendar" className="resourcImg"/>
            <img src={TimeLine} alt="timeline" className="timeline"/>
          </div>
        </div>
    )
}

export default Calendar;
