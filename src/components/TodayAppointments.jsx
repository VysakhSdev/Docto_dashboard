import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./TodayAppointments.css";

const TodayAppointments = ({ className = "" }) => {
  //Appoinments details
  const patients = [
    {
      id: 1,
      name: "Kiran Kuram",
      age: 32,
      gender: "Male",
      phone: "98787236XX",
      doctorName: "Dr. Krishnna Prasadh",
      specialization: "General Medicine",
      time: "12 : 30 am",
      imgSrc: "/mask-group@2x.png",
      timeImgSrc: "/vector-32.svg",
    },
    {
      id: 2,
      name: "Mark Antony",
      age: 32,
      gender: "Male",
      phone: "98787236XX",
      doctorName: "Dr. Krishnna Prasadh",
      specialization: "General Medicine",
      time: "11 : 45 am",
      imgSrc: "/mask-group-1@2x.png",
      timeImgSrc: "/vector-32-1.svg",
    },
  ];

  //Expiring Cryo data
  const Embryo = [
    {
      sub: "Embryo",
      title: "Expiring Cryo",
      count1: 9,
      label1: "Due For Annual Renewal",
      count2: 0,
      label2: "Due For Storage Expiry",
    },
    // Add more data objects as needed
  ];
  const Sprem = [
    {
      sub: "Sprem",
      count1: 7,
      label1: "Due For Annual Renewal",
      count2: 3,
      label2: "Due For Storage Expiry",
    },
  ];
  const Ooctye = [
    {
      sub: "Oocyte",
      count1: 4,
      label1: "Due For Annual Renewal",
      count2: 0,
      label2: "Due For Storage Expiry",
    },
  ];
  
// data for machineTypes
  const machineTypes = [
    { name: 'Embryo Scopes', count: '13' },
    { name: 'Sperm Analyzers', count: '3' },
    // Add more machine types as needed
  ];

  return (
    <div className={`today-appointments ${className}`}>
      {/* Appoinment card */}

      <div className="group-div">
        <div className="frame-child6" />
        <div className="text">{` `}</div>
        <div className="today-appointments-title-conte-wrapper">
          <div className="today-appointments-title-conte">
            <h2 className="pagetitle6">Upcoming Appointments</h2>
            <Button
              className="view-appointments-button"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#666",
                fontSize: "16",
                borderColor: "#dadbdc",
                borderRadius: "20px",
                "&:hover": { borderColor: "#dadbdc" },
                width: 111.5,
                height: 27,
              }}
            >
              See All
            </Button>
          </div>
        </div>
        <div className="appointment-type">
          <div className="appointment-type-child" />
          <div className="today-3"></div>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Today</th>
                <th>Patient Details</th>
                <th>Consultant</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="patient-card">
                    <div className="profile-pic">
                      <img
                        className="mask-group-icon"
                        loading="lazy"
                        alt={patient.name}
                        src={patient.imgSrc}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="frame-parent18">
                      <div className="kiran-kuram-parent">
                        <div className="kiran-kuram">{patient.name}</div>
                        <div className="doctor-name">
                          <div className="wrapper">
                            <div className="div2">{patient.age}</div>
                          </div>
                          <div className="male-wrapper">
                            <div className="male">{patient.gender}</div>
                          </div>
                          <div className="xx-wrapper">
                            <div className="xx">{patient.phone}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="frame-parent18">
                      <div className="dr-krishnna-prasadh-wrapper">
                        <div className="dr-krishnna-prasadh">
                          {patient.doctorName}
                        </div>
                      </div>
                      <div className="specialization">
                        <div className="general-medicine">
                          {patient.specialization}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="time">
                    <div className="am">
                      <span className="span1">{patient.time}</span>
                    </div>
                    <img
                      className="time-child"
                      loading="lazy"
                      alt="time"
                      src={patient.timeImgSrc}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expiring Cryo */}
      <div className="rectangle-parent1">
        <div className="frame-child8" />
        <div className="embryo-title-parent">
          {Embryo?.map((item) => (
            <div key={item.id}>
              <div className="embryo-title">
                <div className="embryo-header">
                  <h2 className="pagetitle7">{item.title}</h2>
                  <div className="sample-name"></div>
                </div>
                <div className="see-all-wrapper">
                  <div className="see-all">See All</div>
                </div>
              </div>
              <div
                className="embryo"
                style={{
                  color: "#7235d1",
                  lineHeight: "1em",
                  fontSize: "18px",
                }}
              >
                {item?.sub}
              </div>

              <div className="embryo-status">
                <div className="embryo-details">
                  <div className="rectangle-parent2">
                    <div className="frame-child9" />
                    <div className="frame-wrapper2">
                      <div className="due-for-annual-renewal-group">
                        <div className="due-for-annual1">{item.label1}</div>
                        <div className="vector-frame">
                          <img
                            className="frame-child10"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-container">
                      <div className="frame-child11" />
                      <div className="div4">{item.count1}</div>
                    </div>
                  </div>
                  <div className="rectangle-parent3">
                    <div className="frame-child12" />
                    <div className="frame-wrapper3">
                      <div className="due-for-storage-expiry-group">
                        <div className="due-for-storage1">{item.label2}</div>
                        <div className="vector-wrapper1">
                          <img
                            className="frame-child13"
                            loading="lazy"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-parent1">
                      <div className="frame-child14" />
                      <div className="div5">{item.count2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {Sprem?.map((item) => (
            <div key={item.id}>
              <div className="embryo-title">
                <div className="embryo-header">
                  <h2 className="pagetitle7">{item.title}</h2>
                  <div className="sample-name"></div>
                </div>
              </div>
              <div
                className="embryo"
                style={{
                  color: "#7235d1",
                  lineHeight: "1em",
                  fontSize: "18px",
                }}
              >
                {item?.sub}
              </div>

              <div className="embryo-status">
                <div className="embryo-details">
                  <div className="rectangle-parent2">
                    <div className="frame-child9" />
                    <div className="frame-wrapper2">
                      <div className="due-for-annual-renewal-group">
                        <div className="due-for-annual1">{item.label1}</div>
                        <div className="vector-frame">
                          <img
                            className="frame-child10"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-container">
                      <div className="frame-child11" />
                      <div className="div4">{item.count1}</div>
                    </div>
                  </div>
                  <div className="rectangle-parent3">
                    <div className="frame-child12" />
                    <div className="frame-wrapper3">
                      <div className="due-for-storage-expiry-group">
                        <div className="due-for-storage1">{item.label2}</div>
                        <div className="vector-wrapper1">
                          <img
                            className="frame-child13"
                            loading="lazy"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-parent1">
                      <div className="frame-child14" />
                      <div className="div5">{item.count2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {Ooctye?.map((item) => (
            <div key={item.id}>
              <div className="embryo-title">
                <div className="embryo-header">
                  <h2 className="pagetitle7">{item.title}</h2>
                  <div className="sample-name"></div>
                </div>
              </div>
              <div
                className="embryo"
                style={{
                  color: "#7235d1",
                  lineHeight: "1em",
                  fontSize: "18px",
                }}
              >
                {item?.sub}
              </div>

              <div className="embryo-status">
                <div className="embryo-details">
                  <div className="rectangle-parent2">
                    <div className="frame-child9" />
                    <div className="frame-wrapper2">
                      <div className="due-for-annual-renewal-group">
                        <div className="due-for-annual1">{item.label1}</div>
                        <div className="vector-frame">
                          <img
                            className="frame-child10"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-container">
                      <div className="frame-child11" />
                      <div className="div4">{item.count1}</div>
                    </div>
                  </div>
                  <div className="rectangle-parent3">
                    <div className="frame-child12" />
                    <div className="frame-wrapper3">
                      <div className="due-for-storage-expiry-group">
                        <div className="due-for-storage1">{item.label2}</div>
                        <div className="vector-wrapper1">
                          <img
                            className="frame-child13"
                            loading="lazy"
                            alt=""
                            src="/vector-8-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-parent1">
                      <div className="frame-child14" />
                      <div className="div5">{item.count2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Machineries Overview */}
         <div className="rectangle-parent4">
        <div className="frame-child15" />
        <div className="machine-title">
          <div className="machine-header">
            <h2 className="pagetitle8">Machineries Overview</h2>
            <div className="see-all-container">
              <div className="see-all1">See All</div>
            </div>
          </div>
        </div>
        <div className="machine-details">
          <div className="machine-type">
            <div className="rectangle-parent5">
              <div className="frame-child16" />
              <div className="total-machines-parent">
                <div className="total-machines">Total Machines</div>
                <div className="vector-wrapper2">
                  <img
                    className="frame-child17"
                    alt=""
                    src="/vector-33-1.svg"
                  />
                </div>
              </div>
              <div className="ellipse-parent2">
                <div className="frame-child18" />
                <div className="div6">13</div>
              </div>
            </div>
          </div>
          <div className="machine-type1">
            <div className="rectangle-parent6">
              <div className="frame-child19" />
              <div className="machines-under-maintenance-parent">
                <div className="machines-under-maintenance">
                  Machines Under Maintenance
                </div>
                <div className="vector-wrapper3">
                  <img
                    className="frame-child20"
                    alt=""
                    src="/vector-32-3.svg"
                  />
                </div>
              </div>
              <div className="ellipse-parent3">
                <div className="frame-child21" />
                <div className="div7">3</div>
              </div>
            </div>
          </div>
          <div className="machine-list">
            <div className="machine-category">
              <div className="machine-type-icon">
                <div className="embryo-scopes">Embryo Scopes</div>
              </div>
              <img
                className="machine-type-icon1"
                alt=""
                src="/machine-type-icon.svg"
              />
              <div className="machine-type-icon2">
                <div className="sperm-analyzers">Sperm Analyzers</div>
              </div>
              <img
                className="machine-type-icon3"
                alt=""
                src="/machine-type-icon.svg"
              />
              <div className="machine-type-icon4">
                <div className="centrifuges">Centrifuges</div>
              </div>
            </div>
          </div>
          <div className="machine-type2">
            <div className="rectangle-parent7">
              <div className="frame-child22" />
              <div className="upcoming-maintenance-parent">
                <div className="upcoming-maintenance">Upcoming Maintenance</div>
                <div className="vector-wrapper4">
                  <img className="frame-child23" alt="" src="/vector-8-2.svg" />
                </div>
              </div>
              <div className="ellipse-parent4">
                <div className="frame-child24" />
                <div className="div8">4</div>
              </div>
            </div>
          </div>
          <div className="maintenance-info">
            <div className="rectangle-parent8">
              <div className="frame-child25" />
              <div className="last-maintenance-date">Last Maintenance Date</div>
              <div className="vector-wrapper5">
                <img className="frame-child26" alt="" src="/vector-32-3.svg" />
              </div>
            </div>
          </div>
          <div className="microscope-info">
            <div className="microscope-count">
              <div className="microscopes">Microscopes</div>
              <div className="microscope-name">02 - 07 - 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAppointments;
