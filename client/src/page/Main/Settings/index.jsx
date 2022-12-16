import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { API } from "../../../api";
import { userSelector } from "../../../redux/selectors";
import Information from "../../../components/Information/";
import ic_pencil from "../../../assets/icons/icon-pencil.svg";

const Settings = () => {
  const userData = useSelector(userSelector);
  const [error, setError] = React.useState(false);
  const [updateButton, setUpdateButton] = React.useState(false);
  const [firstName, setFirstName] = React.useState(userData.firstName);
  const [lastName, setLastName] = React.useState(userData.lastName);
  const [numberPhone, setNumberPhone] = React.useState(userData.numberPhone);
  const [address, setAddress] = React.useState(userData.address);
  const [sex, setSex] = React.useState(userData.sex);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const getLastName = (e) => {
    setLastName(e.target.value);
  };
  const getNumberPhone = (e) => {
    setNumberPhone(e.target.value);
  };
  const getAddress = (e) => {
    setAddress(e.target.value);
  };
  const getSex = (e) => {
    setSex(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleButtonUpdate = () => {
    API.patch("api/users/update", {
      firstName: firstName,
      lastName: lastName,
      numberPhone: numberPhone,
      address: address,
      sex: sex,
    })
      .then((response) => {
        console.log(response.status);
        toast.success("Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="user">
        <ToastContainer></ToastContainer>
        <div className="user-top">
          <div className="user-top-text">
            <h6 className="user-top-heading ">Account Users</h6>
            <p className="user-top-desc">
              Acount users can assess and review risks, questionnaries, data
              leaks and identify breaches
            </p>
          </div>
          <div className="user-top-button">
            <button
              onClick={() => {
                setUpdateButton(!updateButton);
                if (!updateButton) {
                  toast.success("Start updating");
                } else {
                  toast.warn("End updating");
                }
              }}
              className="user-top-btn"
            >
              <img src={ic_pencil} alt="" />
              Change information
            </button>
          </div>
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
          className="user-primary"
        >
          <div className="personal">
            <h6>Personal Information</h6>
            <p>
              Account users can assess and review risks, questionnaries, data
              leaks and identify breaches
            </p>
            <div className="user-primary-personal">
              <div className="row">
                <Information
                  dsb={updateButton ? false : true}
                  label={"First name"}
                  showInfo={userData.firstName}
                  value={firstName}
                  onChange={getFirstName}
                />
                <span></span>
                <Information
                  dsb={updateButton ? false : true}
                  label={"Last name"}
                  showInfo={userData.lastName}
                  value={lastName}
                  onChange={getLastName}
                />
              </div>
              <Information
                dsb={updateButton ? false : true}
                label={"Number phone"}
                showInfo={userData.numberPhone}
                value={numberPhone}
                onChange={getNumberPhone}
              />
              <Information
                dsb={updateButton ? false : true}
                label={"Address"}
                showInfo={userData.address}
                value={address}
                onChange={getAddress}
              />
              <Information
                dsb={updateButton ? false : true}
                label={"Sex"}
                showInfo={userData.sex}
                value={sex}
                onChange={getSex}
              />
            </div>
          </div>
          <div className="credentials">
            <div className="scroll">
              <div className="user-primary-credentials">
                <h6>Credentials</h6>
                <p>
                  Acount users can assess and review risks, questionnaries, data
                  leaks and identify breaches
                </p>
                <Information
                  dsb={true}
                  label={"Email"}
                  showInfo={userData.email}
                />
                <Information
                  dsb={updateButton ? false : true}
                  label={"Password"}
                  showInfo=""
                  password
                  onChange={getPassword}
                />
                <Information
                  error={error ? true : false}
                  dsb={updateButton ? false : true}
                  label={"Confirm Password"}
                  showInfo=""
                  password
                  onChange={getConfirmPassword}
                />
              </div>
            </div>
          </div>
          {updateButton ? (
            <button
              onClick={() => {
                setUpdateButton(!updateButton);
                handleButtonUpdate();
              }}
              className="update-information"
            >
              Save
            </button>
          ) : (
            <button disabled className="update-information disable">
              Save
            </button>
          )}
        </div>
      </div>
      <div className="customize">
        <div className="user-top">
          <div className="user-top-text">
            <h6 className="user-top-heading ">Customize</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
