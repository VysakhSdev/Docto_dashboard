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
import "./LabProfileLinks.css";

const LabProfileLinks = ({ className = "" }) => {
  return (
    <div className={`lab-profile-links ${className}`}>
      <div className="other-wrapper">
        <div className="other">Other</div>
      </div>
      <div className="frame-parent11">
        <div className="frame-parent12">
          <div className="frame-parent13">
            <div className="lab-profile-wrapper">
              <img
                className="lab-profile-icon"
                loading="lazy"
                alt=""
                src="/lab-profile.svg"
              />
            </div>
            <b className="pagetitle2">Billing</b>
          </div>
          <img className="frame-inner" alt="" src="/vector-101.svg" />
        </div>
        <div className="active11" />
      </div>
      <div className="frame-parent14">
        <div className="frame-parent15">
          <div className="frame-parent16">
            <div className="lab-profile-container">
              <img
                className="lab-profile-icon1"
                loading="lazy"
                alt=""
                src="/lab-profile.svg"
              />
            </div>
            <b className="pagetitle3">Reports</b>
          </div>
          <img className="vector-icon" alt="" src="/vector-101.svg" />
        </div>
        <div className="active12" />
      </div>
      <div className="frame-parent17">
        <TextField
          className="clinic-settings-wrapper"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "8px", marginRight: "12px" }}
              >
                <img width="24px" height="24px" src="/settings.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "12px" }}>
                <img width="7px" height="3.5px" src="/vector-10-8.svg" />
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
          <MenuItem value={1}>Clinic Settings</MenuItem>
        </TextField>
        <div className="active13" />
      </div>
    </div>
  );
};

LabProfileLinks.propTypes = {
  className: PropTypes.string,
};

export default LabProfileLinks;
