import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

const AddAppointment = ({ onAddAppointment }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [aptDate, setAptDate] = useState("");
  const [aptTime, setAptTime] = useState("");
  const [aptNotes, setAptNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointment({
      ownerName,
      petName,
      aptDate: `${aptDate} ${aptTime}`,
      aptNotes,
    });
    setToggleForm(false);
    setOwnerName("");
    setPetName("");
    setAptDate("");
    setAptTime("");
    setAptNotes("");
  };

  return (
    <div>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        } `}
        onClick={() => setToggleForm((prev) => !prev)}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <form
          onSubmit={handleSubmit}
          className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4"
        >
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                type="text"
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                type="text"
                name="petName"
                id="petName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                value={aptDate}
                onChange={(e) => setAptDate(e.target.value)}
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                value={aptTime}
                onChange={(e) => setAptTime(e.target.value)}
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                value={aptNotes}
                onChange={(e) => setAptNotes(e.target.value)}
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddAppointment;
