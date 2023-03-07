import React from "react";
import "./NoTeamModal.css";
import male from "../images/male.png";
import female from "../images/female.png";

const NoTeamModal = ({ employees }) => {
  //
  const emptyTeam = () =>
    employees.filter((employee) => (employee.teamName === "" ? employee : ""));
  //
  const employeesObj = emptyTeam();

  //
  return (
    <div className="no_team d-flex justify-content-center">
      <button
        type="button"
        id={employeesObj.length === 0 ? "hide_div" : "show_div"}
        className="btn button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        View Members without Team
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="staticBackdropLabel">
                Member(s) without Team Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card shadow-sm rounded" id="modal-card">
                <div className="card-body">
                  {Object.keys(employeesObj).map((employee) => (
                    <div
                      className="row shadow-sm rounded"
                      id="modal-row"
                      key={employeesObj[employee].id}
                    >
                      <div className="col-md-6">
                        <img
                          id="card_img"
                          src={
                            employeesObj[employee].gender === "male"
                              ? male
                              : female
                          }
                          className="card-img-top"
                          alt="card--img"
                        />
                      </div>
                      {/* end col */}

                      <div className="col-md-6 align-self-center">
                        <h1>
                          Fullname:
                          <span className="badge rounded-pill text-bg-primary">
                            {employeesObj[employee].fullName}
                          </span>
                        </h1>

                        <p>
                          Designation:
                          <span className="badge rounded-pill text-bg-dark">
                            {employeesObj[employee].designation}
                          </span>
                        </p>
                      </div>
                      {/* end col */}
                    </div>
                  ))}
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end modal-body */}
          </div>
          {/* end modal-content */}
        </div>
        {/* end modal-dialog */}
      </div>
      {/* end card */}
    </div>
  );
};

export default NoTeamModal;
