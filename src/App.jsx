import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useEffect, useState } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setAppointmentList(data);
    };
    fetchAppointments();
  }, []);

  return (
    <div className="App container mx-auto mt-3 font-thin p-5">
      <h1 className="text-5xl mb-5">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo appointment={appointment} key={appointment.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
