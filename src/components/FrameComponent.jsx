import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="doctor-module-wrapper">
        <div className="doctor-module">Doctor Module</div>
      </div>
      <div className="nav-link-wrapper">
        <div className="nav-link">
          <div className="nav-link1">
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="dashboard-wrapper">
                  <img className="dashboard-icon" alt="" src="/dashboard.svg" />
                </div>
                <a className="pagetitle">Dashboard</a>
              </div>
              <img className="frame-child" alt="" src="/vector-10.svg" />
            </div>
            <div className="active5" />
          </div>
        </div>
      </div>
      <div className="doctor-sidebar-links">
        <div className="nav-link2">
          <div className="nav-link3">
            <div className="frame-parent6">
              <TextField
                className="patient-registration-wrapper"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "8px", marginRight: "12px" }}
                    >
                      <img width="24px" height="24px" src="/dashboard-1.svg" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12px" }}
                    >
                      <img width="7px" height="3.5px" src="/vector-10.svg" />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{ IconComponent: () => null }}
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "9px",
                  width: "92.27941176470588%",
                  height: "36px",
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root": { height: "100%" },
                  "& .MuiInputBase-input": {
                    color: "#a3aed0",
                    fontSize: 16,
                    fontWeight: "Bold",
                    fontFamily: "DM Sans",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <MenuItem value={1}>Patient Registration</MenuItem>
              </TextField>
              <div className="active6" />
            </div>
          </div>
        </div>
        <div className="nav-link4">
          <div className="nav-link5">
            <div className="frame-parent7">
              <div className="frame-parent8">
                <div className="dashboard-container">
                  <img
                    className="dashboard-icon1"
                    loading="lazy"
                    alt=""
                    src="/dashboard-2.svg"
                  />
                </div>
                <a className="pagetitle1">Patients</a>
              </div>
              <img className="frame-item" alt="" src="/vector-101.svg" />
            </div>
            <div className="active7" />
          </div>
        </div>
        <div className="frame-parent9">
          <TextField
            className="cycles-wrapper"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "8px", marginRight: "12px" }}
                >
                  <img width="24px" height="24px" src="/cycle.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "12px" }}>
                  <img width="7px" height="3.5px" src="/vector-10-1.svg" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "9px",
              width: "92.27941176470588%",
              height: "36px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#a3aed0",
                fontSize: 16,
                fontWeight: "Bold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>Cycles</MenuItem>
          </TextField>
          <div className="active8" />
        </div>
        <div className="frame-parent10">
          <TextField
            className="art-wrapper"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "8px", marginRight: "12px" }}
                >
                  <img width="24px" height="24px" src="/labs.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "12px" }}>
                  <img width="7px" height="3.5px" src="/vector-10-2.svg" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "9px",
              width: "92.27941176470588%",
              height: "36px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#a3aed0",
                fontSize: 16,
                fontWeight: "Bold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>ART</MenuItem>
          </TextField>
          <div className="active9" />
        </div>
        <div className="nav-link6">
          <div className="nav-link7">
            <TextField
              className="appointments-wrapper"
              variant="standard"
              select
              value={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "8px", marginRight: "12px" }}
                  >
                    <img width="24px" height="24px" src="/dashboard-3.svg" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ marginRight: "12px" }}
                  >
                    <img width="7px" height="3.5px" src="/vector-10-3.svg" />
                  </InputAdornment>
                ),
              }}
              SelectProps={{ IconComponent: () => null }}
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "9px",
                width: "92.27941176470588%",
                height: "36px",
                "& .MuiInput-underline:before": { borderBottom: "none" },
                "& .MuiInput-underline:after": { borderBottom: "none" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root": { height: "100%" },
                "& .MuiInputBase-input": {
                  color: "#a3aed0",
                  fontSize: 16,
                  fontWeight: "Bold",
                  fontFamily: "DM Sans",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value={1}>Appointments</MenuItem>
            </TextField>
            <div className="active10" />
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent;
