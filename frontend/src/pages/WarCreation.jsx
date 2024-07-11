import React, { useState } from 'react';
import plus_sign from '../assets/Plus_Sign.png';
import minus_sign from '../assets/Minus_Sign.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function WarCreation() {

  const initialTableData = [
    { id: 1, startDate: new Date(), endDate: new Date(), projectTitle: '', projectStatus: '', dayPlan: '', information: '' }
];

const [tableData, setTableData] = useState(initialTableData);

const addRow = () => {
    const newRow = {
        id: tableData.length + 1,
        startDate: new Date(),
        endDate: new Date(),
        projectTitle: '',
        projectStatus: '',
        dayPlan: '',
        information: ''
    };
    setTableData([...tableData, newRow]);
};

const removeRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
};

const handleDateChange = (date, rowIndex, field) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][field] = date;
    setTableData(updatedData);
};

const handleInputChange = (e, rowIndex, field) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][field] = e.target.value;
    setTableData(updatedData);
};

const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
        projectID: 'your_project_id', // Replace with actual project ID
        wars: tableData.map(row => ({
            startDate: row.startDate,
            endDate: row.endDate,
            projectTitle: row.projectTitle,
            projectStatus: row.projectStatus,
            dayPlan: row.dayPlan,
            information: row.information
        }))
    };

    const url = 'http://127.0.0.1:5000/create_war';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create War object');
        }
        alert('War object created successfully');
    } catch (error) {
        alert(error.message);
    }
};

  // Styles object
  const styles = {
    WARPage: {
      backgroundColor: '#ffffff',
      width: '1920px',
      height: '1080px',
      overflow: 'hidden',
      position: 'relative'
    },
    div: {
      backgroundColor: '#ffffff',
      height: '1080px',
      overflow: 'hidden',
      position: 'absolute',
      width: '1920px',
      top: '50px',
      left: '50px',
    },
    textWrapper1: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '23px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '45px',
      width: '148px'
    },
    rectangle1: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      top: '84px',
      width: '250px',
      border: '2px solid #000000' 
    },
    textWrapper2: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '23px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '192px',
      width: '148px'
    },
    rectangle2: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      top: '225px',
      width: '250px',
      border: '2px solid #000000' 
    },
    textWrapper3: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '15px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '333px',
      width: '148px'
    },
    rectangle3: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      top: '366px',
      width: '250px',
      border: '2px solid #000000' 
    },
    textWrapper4: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '15px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '474px',
      width: '241px'
    },
    rectangle4: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      top: '507px',
      width: '250px',
      border: '2px solid #000000' 
    },
    textWrapper5: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      right: '837px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '45px',
      width: '148px'
    },
    rectangle5: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '654px',
      right: '600px',
      position: 'absolute',
      top: '84px',
      width: '700px',
      border: '2px solid #000000' 
    },
    div2: {
      position: 'absolute',
      right: '575px',
      height: '654px',
      width: '700px',
      top: '94px'
    },
    textWrapper6: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '10px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '5px',
      width: '47px',
      zIndex: '2'
    },
    textWrapper7: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      left: '225px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '5px',
      width: '111px',
      zIndex: '2', 
    },
    textWrapper8: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: '400',
      right: '195px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '5px',
      width: '63px',
      zIndex: '2'
    },
    line: {
      top: '40px',
      backgroundColor: '#000000',
      height: '2px',
      width: '675px',
      zIndex: '3',
      position: 'absolute'
    },
    warTable: {
      width: '100%',
      marginTop: '50px',
      borderCollapse: 'collapse'
    },
    warTableThTd: {
      padding: '18px',
      border: '1px solid #dfdfdf'
    },
    warTableTh: {
      textAlign: 'left'
    },
    warTableInput: {
      width: '100%',
      padding: '6px',
      boxSizing: 'border-box'
    },
    plusSign: {
      top:'655px',
      position: 'absolute',
      right: '550px',
      width: '10%',
      height: '10%',
    },
    minusSign: {
      top: '677px',
      position: 'absolute',
      left: '1px',
      width: '10%', // Adjust width for smaller size
      height: '3%', // Adjust height for smaller size
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
        top: '790px', // Adjusted to match textWrapper9PC top position
        left: '835px', // Adjusted to match textWrapper9PC left position
        width: '237px',
        border: '2px solid #000000' 
      },
      // Updated styles for input fields
    inputContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px', // Adjust padding as needed
    },
    inputField: {
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        fontFamily: 'Lexend-Regular, Helvetica',
        fontSize: '16px',
        padding: '2px',
        boxSizing: 'border-box',
        overflow: 'hidden', // Ensure no overflow
        textOverflow: 'ellipsis', // Ensure text ellipsis if overflow
        whiteSpace: 'nowrap', // Ensure no wrapping
    },
  };

  return (
    <div style={styles.WARPage}>
      <div style={styles.div}>
        <div style={styles.textWrapper1}>Project Name</div>
        <input type="text" style={styles.rectangle1} />
        <div style={styles.textWrapper2}>Project Status</div>
        <input type="text" style={styles.rectangle2} />
        <div style={styles.textWrapper3}>90 Day Plan</div>
        <input type="text" style={styles.rectangle3} />
        <div style={styles.textWrapper4}>Additional Information</div>
        <input type="text" style={styles.rectangle4} />
        
        <div style={styles.textWrapper5} >Milestones</div>
        <div style={styles.rectangle5} />

        <div style={styles.div2}>
          <div style={styles.textWrapper6}>Date</div>
          <div style={styles.textWrapper7}>Description</div>
          <div style={styles.textWrapper8}>Status</div>
          <div style={styles.line}></div>

          {/* Table */}
          <table style={styles.warTable}>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id}>
                <td>
                  <DatePicker
                    selected={row.date}
                    onChange={(date) => handleDateChange(date, index)}
                    dateFormat="dd/MM/yyyy"
                    className="war-table-input" // Add appropriate class for styling
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.description}
                    onChange={(e) => handleInputChange(e, index, 'description')}
                    className="war-table-input" // Add appropriate class for styling
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.status}
                    onChange={(e) => handleInputChange(e, index, 'status')}
                    className="war-table-input" // Add appropriate class for styling
                  />
                </td>
                <td>
                  <img
                    alt="Group"
                    src={minus_sign}
                    style={{ ...styles.minusSign, cursor: 'pointer' }} // Apply styles here
                    onClick={() => removeRow(index)}
                  />
                </td>
              </tr>
              ))}
            </tbody>
          </table>

          {/* Plus sign button */}
          <img
            alt="Group"
            src={plus_sign}
            style={{ ...styles.plusSign, cursor: 'pointer' }}
            onClick={addRow}
          />
        </div>

        <button style={styles.buttonPC} onClick={() => window.location.href = '/'}>Submit</button>
      </div>
    </div>
  );
}

export default WarCreation;
