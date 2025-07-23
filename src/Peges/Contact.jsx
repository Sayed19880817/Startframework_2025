import React, { useState, useEffect } from 'react';
import HeaderDivider from '../Component/header';


export default function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  let [nameEmpty, SetNameEmpty] = useState(true);
  let [ageEmpty, SetAgeEmpty] = useState(true);
  let [emailEmpty, SetEmailEmpty] = useState(true);
  let [passwordEmpty, SetPasswordEmpty] = useState(true);

  function handleNameChange(e) {
    if (e.target.value !== '') {
      SetNameEmpty(false);
    } else if (e.target.value == '') {
      SetNameEmpty(true);
    }
  }
  function handleAgeChange(e) {
    if (e.target.value !== '') {
      SetAgeEmpty(false);
    } else if (e.target.value == '') {
      SetAgeEmpty(true);
    }
  }
  function handleEmailChange(e) {
    if (e.target.value !== '') {
      SetEmailEmpty(false);
    } else if (e.target.value == '') {
      SetEmailEmpty(true);
    }
  }
  function handlePasswordChange(e) {
    if (e.target.value !== '') {
      SetPasswordEmpty(false);
    } else if (e.target.value == '') {
      SetPasswordEmpty(true);
    }
  }
  console.log(nameEmpty);

  return (
    <div
      id="contactPage"
      className="d-flex flex-column justify-content-center align-items-center text-navy py-5 min-vh-100 bg-white"
    >
      <h2 className="heading text-uppercase pt-5 mt-5">CONATCT SECTION</h2>

      <HeaderDivider />

      <div className="w-100">
        <form className="w-50 p-3 mx-auto mt-5 bg-white">
          <label htmlFor="Name" className="position-relative">
            <span className={nameEmpty ? 'SlideDown' : 'SlideUp'}>
              UserName:
            </span>
          </label>
          <input
            id="Name"
            type="text"
            placeholder="UserName"
            name="Name"
            className="form-control border-0 border-bottom my-2 py-3 "
            onChange={handleNameChange}
          />

          <label htmlFor="Age" className="position-relative top-0 ">
            <span className={ageEmpty ? 'SlideDown' : 'SlideUp'}>UserAge:</span>
          </label>
          <input
            id="UserAge"
            type="text"
            placeholder="Age"
            name="Name"
            className="form-control border-0 border-bottom my-2 py-3"
            onChange={handleAgeChange}
          />

          <label htmlFor="Email" className="position-relative top-0 ">
            <span className={emailEmpty ? 'SlideDown' : 'SlideUp'}>
              UserEmail:
            </span>
          </label>
          <input
            id="Email"
            type="text"
            placeholder="UserEmail"
            name="Name"
            className="form-control border-0 border-bottom my-2 py-3 "
            onChange={handleEmailChange}
          />

          <label htmlFor="Password" className="position-relative top-0 ">
            <span className={passwordEmpty ? 'SlideDown' : 'SlideUp'}>
              Password:
            </span>
          </label>
          <input
            id="Password"
            type="text"
            placeholder="Password"
            name="Name"
            className="form-control border-0 border-bottom my-2 py-3"
            onChange={handlePasswordChange}
          />

          <button
            type="button"
            className="btn mt-4 text-white"
            style={{ backgroundColor: '#1abc9c' }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}