import React, { useRef } from "react";
import styles from "./index.module.css";

function RegistrationForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const addressRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const yearRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      dob: {
        month: monthRef.current.value,
        day: dayRef.current.value,
        year: yearRef.current.value,
      },
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className={styles["registration-form"]}>
      <h1>YourEvent</h1>
      <h2>Online Registration</h2>

      <div className={styles["name-Wrpaper"]}>
        <label>
          First Name
          <input type="text" ref={firstNameRef} placeholder="First Name" />
        </label>

        <label>
          Last Name
          <input type="text" ref={lastNameRef} placeholder="Last Name" />
        </label>
      </div>

      <label>
        Email Address
        <input type="email" ref={emailRef} placeholder="Email Address" />
      </label>

      <label>
        Company (if applicable)
        <input type="text" ref={companyRef} placeholder="Company" />
      </label>

      <label>
        Physical Address
        <input type="text" ref={addressRef} placeholder="Physical Address" />
      </label>

      <label>
        Date of Birth
        <div className={styles.dob}>
          <select ref={monthRef}>
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select ref={dayRef}>
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select ref={yearRef}>
            <option value="">Year</option>
            {[...Array(51)].map((_, i) => (
              <option key={i + 1973} value={i + 1973}>
                {i + 1973}
              </option>
            ))}
          </select>
        </div>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
