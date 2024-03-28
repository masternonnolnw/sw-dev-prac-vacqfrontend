import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
function Home() {
  return (
    <>
      <section className="heading">
        <h1>Vac Q: A VaccineBooking System</h1>
        <p>Please choose from anoption below</p>
      </section>
      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle />
        Create New Appointment
      </Link>
      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt />
        View MyAppointments
      </Link>
    </>
  );
}
export default Home;
