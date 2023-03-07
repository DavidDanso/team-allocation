import React, { useState } from "react";
import "./Teams.css";
import NoTeamModal from "./NoTeamModal";

const Teams = ({ employees, setSelectedTeam }) => {
  const [groupTeamMembers, setGroupTeamMembers] = useState(groupMembers());

  function groupMembers() {
    const teams = [];

    // team A
    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = { team: "TeamA", members: teamAMembers };
    teams.push(teamA);

    // team B
    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = { team: "TeamB", members: teamBMembers };
    teams.push(teamB);

    // team C
    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = { team: "TeamC", members: teamCMembers };
    teams.push(teamC);

    // team D
    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = { team: "TeamD", members: teamDMembers };
    teams.push(teamD);

    return teams;
  }

  const handleSomething = (event) => {
    setSelectedTeam(event.currentTarget.id);
  };
  //
  return (
    <div className="section">
      <div className="container" id="accordion-container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {groupTeamMembers.map((item) => (
            <div
              className="accordion-item"
              key={item.team}
              id={item.team}
              onClick={handleSomething}
            >
              <h2 className="accordion-header" id={"flush-heading" + item.team}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapse" + item.team}
                  aria-expanded="false"
                  aria-controls={"flush-collapse" + item.team}
                >
                  <strong>Team Name:</strong> {item.team}
                </button>
                {/* end accordion-button */}
              </h2>
              <div
                id={"flush-collapse" + item.team}
                className="accordion-collapse collapse"
                aria-labelledby={"flush-heading" + item.team}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {item.members.map((member) => (
                    <div className="teamInfo" key={member.id}>
                      <h1>
                        Full Name: <span>{member.fullName}</span>
                      </h1>
                      <p id="designation">
                        Designation: <span>{member.designation}</span>
                      </p>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              {/* end accordion-collapse */}
            </div>
          ))}
          {/* end accordion-item */}
        </div>
        {/* end accordion */}
      </div>

      <NoTeamModal employees={employees} />
    </div>
  );
};

export default Teams;
