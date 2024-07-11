import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import seraph_logo from '../assets/seraph_logo-1.png';
import 'bootstrap/dist/css/bootstrap.css';

function SprintCreation() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const styles = {
    '*': {
      margin: 0,
      padding: 0,
    },
    divPC: {
      backgroundColor: '#ffffff',
      height: '952px',
      top: '128px',
      position: 'absolute',
      width: '1920px',
      alignItems: 'center',
      left: '50%',  // Center div horizontally
      transform: 'translateX(-50%)',  // Adjust for centering
    },
    textWrapper1PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '309px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '46px',
    },
    textWrapper2PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '585px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '46px',
    },
    textWrapper3PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '863px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '51px',
    },
    textWrapper4PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '1141px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '51px',
    },
    textWrapper5PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '863px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '192px',
    },
    textWrapper6PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '1141px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '192px',
    },
    textWrapper7PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '863px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '333px',
    },
    textWrapper8PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '1141px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '333px',
    },
    textWrapper9PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '863px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '474px',
    },
    datePicker: {
      borderRadius: '10px',
      height: '48px',
      position: 'absolute',
      zIndex: 3,
      width: '237px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
    },
    rectangle1PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '309px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '84px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle2PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '585px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '84px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle3PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '863px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '84px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle4PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '1141px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '84px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle5PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '863px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '225px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle6PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '1141px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '225px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle7PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '863px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '366px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle8PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '1141px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '366px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle9PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '863px',
      position: 'absolute',
      zIndex: 1,
      width: '515px',
      top: '507px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    buttonPC: {
      backgroundColor: '#d9d9d9', // Match the background color of the text boxes
      borderRadius: '10px', // Match the border radius of the text boxes
      height: '48px', // Match the height of the text boxes
      border: 'none', // Remove the border to match the text boxes
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px', // Match the font size of the text boxes
      fontWeight: 400,
      fontFamily: 'Lexend-Regular, Helvetica',
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 2,
      top: '648px', // Adjusted to match textWrapper9PC top position
      left: '1141px', // Adjusted to match textWrapper9PC left position
      width: '237px',
      border: '2px solid #000000' 
    },
    datePicker: {
      zIndex: 3, // Ensure datepicker appears above rectangles
      position: 'relative',
      backgroundColor: 'red',
    },
  };

  return (
    <div style={styles.divPC}>
      <div style={styles.textWrapper1PC}>Start Date</div>
      <div style={styles.rectangle1PC}>
        <DatePicker
          label="Controlled picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="datePicker" // Ensure this matches your CSS class name
          style={styles.datePicker}
        />
      </div>

      <div style={styles.textWrapper2PC}>End Date</div>
      <div style={styles.rectangle2PC}>
        <DatePicker
          label="Controlled picker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          className="datePicker" // Ensure this matches your CSS class name
          style={styles.datePicker}
        />
      </div>

      <div style={styles.textWrapper3PC}>Number of Sprints</div>
      <input type="text" style={styles.rectangle3PC} placeholder="    " />

      <div style={styles.textWrapper4PC}>Project ID</div>
      <input type="text" style={styles.rectangle4PC} placeholder="  " />

      <div style={styles.textWrapper5PC}>Uncommited Load </div>
      <input type="text" style={styles.rectangle5PC} placeholder="  " />

      <div style={styles.textWrapper6PC}>Commited Load </div>
      <input type="text" style={styles.rectangle6PC} placeholder="  " />

      <div style={styles.textWrapper7PC}>Sprint ID</div>
      <input type="text" style={styles.rectangle7PC} placeholder="  " />

      <div style={styles.textWrapper8PC}>Sprint Name</div>
      <input type="text" style={styles.rectangle8PC} placeholder="  " />

      <div style={styles.textWrapper9PC}>Notes </div>
      <input type="text" style={styles.rectangle9PC} placeholder="  " />

      <button style={styles.buttonPC} onClick={() => window.location.href = '/'}>Submit</button>
    </div>
  );
}

export default SprintCreation;
