import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./HomeHeader.css";

const HomeHeader = ({ className = "" }) => {
  return (
    <div className={`home-header ${className}`}>
      <nav className="rectangle-parent">
        <div className="rectangle-div" />
        <a className="home">Home</a>
        <div className="search-bar">
          <TextField
            className="background"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="11px" height="11px" src="/search-icon.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "41px",
                backgroundColor: "#f4f7fe",
                paddingLeft: "19.4px",
                borderRadius: "49px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "11px",
                color: "#8f9bba",
              },
              width: "547px",
            }}
          />
        </div>
        <div className="header-actions">
          <div className="header-action-icons">
            <img
              className="notifications-none-icon"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <div className="notification-icon-wrapper">
            <img
              className="notification-icon"
              alt=""
              src="/notification-icon.svg"
            />
          </div>
          <div className="header-action-icons1">
            <img
              className="info-outline-icon"
              loading="lazy"
              alt=""
              src="/info-outline.svg"
            />
          </div>
          <div className="info-icon-wrapper">
            <img
              className="info-icon"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <Button
            className="user-profile"
            startIcon={
              <img width="40.9px" height="41px" src="/avatar-style-6.png" />
            }
            endIcon={
              <img
                width="13px"
                height="13px"
                src="/user-profile-dropdown-icon.svg"
              />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#424242",
              fontSize: "15",
              background: "#f4f7fe",
              borderRadius: "21px",
              "&:hover": { background: "#f4f7fe" },
            }}
          >
            Admin
          </Button>
        </div>
      </nav>
      <div className="user-greeting">
  <h1 className="good-morning-jefy">{`Good Morning Jefy, `}</h1>
  <div className="patient-summary">
    <div className="patient-summary-title">
      <img
        className="patient-summary-title-child"
        loading="lazy"
        alt=""
        src="/group-2262.svg"
      />
      <h2 className="pagetitle4">Shortcuts</h2>
    </div>
    <div className="patient-summary-details">
    <Button
        className="patient-summary-detail-icons1"
        startIcon={
          <img width="3.5px" height="7px" src="/vector-8-1.svg" />
        }
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#5b5b5b",
          fontSize: "14px",
          borderColor: "rgba(68, 20, 141, 0.3)",
          borderRadius: "24px",
          "&:hover": { borderColor: "rgba(68, 20, 141, 0.3)" },
          width: "100%", 
          maxWidth: "157.5px", 
          height: "46px",
          marginBottom: "10px", 
        }}
      >
        Male Registration
      </Button>
      <Button
        className="patient-summary-detail-icons1"
        startIcon={
          <img width="3.5px" height="7px" src="/vector-8-1.svg" />
        }
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#5b5b5b",
          fontSize: "14px",
          borderColor: "rgba(68, 20, 141, 0.3)",
          borderRadius: "24px",
          "&:hover": { borderColor: "rgba(68, 20, 141, 0.3)" },
          width: "100%", 
          maxWidth: "157.5px", 
          height: "46px",
          marginBottom: "10px", 
        }}
      >
        Female Registration
      </Button>
      <div className="patient-summary-count">
        <h3 className="patient-summary-count1">+</h3>
        <div className="pagetitle5">Add Section</div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

HomeHeader.propTypes = {
  className: PropTypes.string,
};

export default HomeHeader;
