
import useOnClickOutside from "../Hooks/useOnClickOutside"

const Calendar = ({setCalendarClick, modalRef}) => {
    useOnClickOutside(modalRef, () => setCalendarClick(false))
    return(
        <div ref = {modalRef} style={{border: '1px solid red'}}>
            Hi I'm a modal. Click outside of me.
        </div>
    )
}

export default Calendar