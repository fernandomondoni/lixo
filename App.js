import "./styles.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          autoFocus={false}
          inputFormat="MM-dd-yyyy"
          className="bg-mainPanel rounded-md"
          PaperProps={dateTimePaperPropsStyles}
          value={value}
          renderInput={(params) => <TextField {...params} error={false} />}
          PopperProps={{
            placement: "bottom-start",
          }}
          showDaysOutsideCurrentMonth={true}
          onChange={(newDate) => {
            setValue(newDate);
          }}
          views={["day"]}
        />
      </LocalizationProvider>
    </div>
  );
}

const dateTimePaperPropsStyles = {
  sx: {
    ".MuiPickersCalendarHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".MuiPickersCalendarHeader-root:first-child": {
      order: 0,
      paddingRight: "20px",
      paddingLeft: "20px",
    },
    ".MuiPickersArrowSwitcher-root": {
      display: "inline-flex",
    },
    ".MuiPickersCalendarHeader-label": {
      textAlign: "center",
    },
    ".MuiPickersArrowSwitcher-spacer": {
      width: "220px",
    },
    ".css-31ca4x-MuiPickersFadeTransitionGroup-root": {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: "0",
      right: "0",
      textAlign: "center",
    },
    ".css-9reuh9-MuiPickersArrowSwitcher-root": {
      marginLeft: "-2px",
    },
    ".MuiPickersArrowSwitcher-button": {
      paddingRight: "7px",
    },
  },
};
-----

"dependencies": {
    "@date-io/date-fns": "2.16.0",
    "@emotion/react": "11.10.5",
    "@emotion/styled": "11.10.5",
    "@mui/lab": "5.0.0-alpha.108",
    "@mui/material": "5.10.14",
    "@mui/x-date-pickers": "5.0.8",
    "date-fns": "2.29.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "4.0.0"
  },
  "devDependencies": {
    "@babel/runtime": "7.13.8",
    "typescript": "4.1.3"
  },
