// import axios from "axios";
// import React, { useState } from "react";

// const POST_API = "https://jsonplaceholder.typicode.com/posts";

// function Takehome() {
//   const [appointmentData, setAppointmentData] = useState({
//     firstName: "",
//     lastName: "",
//     email: ""
//   });

//   const handleInputChange = (e) => {
//     // https://reactjs.org/docs/forms.html#handling-multiple-inputs
//     const name = e.target.name;
//     const value = e.target.value;
//     setAppointmentData({ ...appointmentData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // alert("Your favorite flavor is: " + this.state.value);
//     const res = await axios.post(POST_API, appointmentData);
//     console.log(res.data);
//   };

//   return (
//     <div>
//       <main>
//         <h1>Book a session</h1>
//         <p>Fill in the form below to book a virtual session with your doctor</p>

//         <form id="booking-form" onSubmit={handleSubmit}>
//           <h5>Basic Info</h5>
//           <div>
//             <label htmlFor="firstName" className="form-label">
//               First Name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               className="form-control"
//               value={appointmentData.fName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="form-label">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               className="form-control"
//               value={appointmentData.lName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="form-control"
//               value={appointmentData.email}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <h5>Doctor</h5>
//             <select className="form-select" name="doctor">
//               <option value="">Select your doctor</option>
//               <option value="JOHN_HOPKINS">Dr. John Hopkins</option>
//               <option value="MAYA_MARIN">Dr. Maya Marin</option>
//               <option value="DONNA_DOUGLAS">Dr. Donna Douglas</option>
//             </select>
//           </div>

//           <div id="radio-btn">
//             <h5>Where?</h5>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="location"
//                 value="GOOGLE_MEET"
//                 className="form-check-input"
//                 id="location-meet"
//               />
//               <label htmlFor="location-meet" className="form-check-label">
//                 Google Meet
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="location"
//                 value="PHONE"
//                 className="form-check-input"
//                 id="location-phone"
//               />
//               <label htmlFor="location-phone" className="form-check-label">
//                 Phone
//               </label>
//             </div>
//           </div>

//           <h5>When?</h5>
//           <input
//             type="datetime-local"
//             name="date"
//             id="date"
//             className="form-control"
//           />

//           <button type="submit">Confirm Booking</button>
//         </form>
//         <section>
//           <h2>Appointment Details</h2>
//           <ul id="appointment-details"></ul>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Takehome;
