import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import LabProfileLinks from "../components/LabProfileLinks";
import HomeHeader from "../components/HomeHeader";
import TodayAppointments from "../components/TodayAppointments";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dash-board">
      <div className="doctor-module-sidebar">
        
        <div className="frame-parent">
          <FrameComponent />
          <div className="active-wrapper">
            <div className="active" />
          </div>
        </div>
        <div className="frame-group">
          <div className="departments-wrapper">
            <div className="departments">Departments</div>
          </div>
          <div className="departments-links">
            <div className="frame-container">
              <TextField
                className="hr-module-wrapper"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "8px", marginRight: "12px" }}
                    >
                      <img width="24px" height="24px" src="/work.svg" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12px" }}
                    >
                      <img width="7px" height="3.5px" src="/vector-10-4.svg" />
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
                <MenuItem value={1}>HR Module</MenuItem>
              </TextField>
              <div className="active1" />
            </div>
            <div className="frame-div">
              <TextField
                className="pharmacy-module-wrapper"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "8px", marginRight: "12px" }}
                    >
                      <img width="24px" height="24px" src="/admin-meds.svg" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12px" }}
                    >
                      <img width="7px" height="3.5px" src="/vector-10-5.svg" />
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
                <MenuItem value={1}>Pharmacy Module</MenuItem>
              </TextField>
              <div className="active2" />
            </div>
            <div className="frame-parent1">
              <TextField
                className="laboratory-module-wrapper"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "8px", marginRight: "12px" }}
                    >
                      <img width="24px" height="24px" src="/lab-panel.svg" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12px" }}
                    >
                      <img width="7px" height="3.5px" src="/vector-10-6.svg" />
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
                <MenuItem value={1}>Laboratory Module</MenuItem>
              </TextField>
              <div className="active3" />
            </div>
            <div className="frame-parent2">
              <TextField
                className="finance-module-wrapper"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "8px", marginRight: "12px" }}
                    >
                      <img width="24px" height="24px" src="/payments.svg" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12px" }}
                    >
                      <img width="7px" height="3.5px" src="/vector-10-7.svg" />
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
                <MenuItem value={1}>Finance Module</MenuItem>
              </TextField>
              <div className="active4" />
            </div>
          </div>
        </div>
        <LabProfileLinks />
        <img className="separator-icon" alt="" src="/separator.svg" />
      </div>
      <main className="home-content-wrapper">
        <section className="home-content">
          <HomeHeader />
          <TodayAppointments />
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
