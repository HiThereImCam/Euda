import useOnClickOutside from "../Hooks/useOnClickOutside";

const Learn = ({setResourceClick, modalRef}) => {
    useOnClickOutside(modalRef, () => setResourceClick(false))
    return(
        <div className="modalShape" ref = {modalRef}>
        <section>
            <div>
                <h3>Looking to learn more about mental health? Explore today’s articles below:</h3>
            </div>

            <div className="resources">
                <div className="textContainer">
                    <a href="/">“5 tips to tackle finals week stress” -- Psychology Today</a>
                </div>
            </div>

            <div className="resources">
                <div className="textContainer">
                    <a href="/">“The morning mindfulness practice that will jump start your day” -- PsyNet.org</a>
                </div>
            </div>
            <div className="resources">
                <div className="textContainer">
                    <a href="/">“5 questions to ask your partner to build a healthy relationship” -- APA.org</a>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Learn;