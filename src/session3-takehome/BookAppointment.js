import axios from "axios";
import React, { useState } from "react";

const POST_API = "https://jsonplaceholder.typicode.com/posts";

export default function BookAppointment() {
  const appointmentInit = {
    firstName: "",
    lastName: "",
    email: "",
    selectedDoctor: "",
    contactOptionSelected: "",
    date: ""
  };
  const [appointmentData, setAppointmentData] = useState(appointmentInit);
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, doctorsData) => {
    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const name = e.target.name;
    const value = e.target.value;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(POST_API, appointmentData);
      setIsBooked(true);
    } catch (e) {
      console.log(e.response);
    }
    setIsLoading(false);
  };

  const handleCancel = () => {
    setIsBooked(false);
  };

  return (
    <div>
      {isBooked ? (
        <section>
          <h2>Appointment booked successfully</h2>

          <button type="button" onClick={handleCancel}>
            Cancel appointment
          </button>
        </section>
      ) : (
        <main>
          <h1>Book a session</h1>
          <p>
            Fill in the form below to book a virtual session with your doctor
          </p>

          {isLoading ? (
            <h3>Scheduling the appointment...</h3>
          ) : (
            <form id="booking-form" onSubmit={handleSubmit}>
              {/* Basic Info */}
              <h5>Basic Info</h5>
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={appointmentData.fName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  value={appointmentData.lName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={appointmentData.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              {/* Appointment details */}
              <div>
                <h5>Doctor</h5>
                <select
                  className="form-select"
                  name="selectedDoctor"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select your doctor</option>
                  <option value="JOHN_HOPKINS">Dr. John Hopkins</option>
                  <option value="MAYA_MARIN">Dr. Maya Marin</option>
                  <option value="DONNA_DOUGLAS">Dr. Donna Douglas</option>
                </select>
              </div>

              {appointmentData.selectedDoctor && (
                <div id="radio-btn">
                  <h5>Where?</h5>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="location"
                      value="GOOGLE_MEET"
                      className="form-check-input"
                      id="location-meet"
                      onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="location-meet" className="form-check-label">
                      Google Meet
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="location"
                      value="PHONE"
                      className="form-check-input"
                      id="location-phone"
                      onChange={(e) => handleInputChange(e)}
                    />
                    <label
                      htmlFor="location-phone"
                      className="form-check-label"
                    >
                      Phone
                    </label>
                  </div>
                </div>
              )}

              {appointmentData.selectedDoctor && (
                <div>
                  <h5>When?</h5>
                  <input
                    type="datetime-local"
                    name="date"
                    id="date"
                    className="form-control"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              )}

              <button type="submit">Confirm Booking</button>
            </form>
          )}
        </main>
      )}
    </div>
  );
}
