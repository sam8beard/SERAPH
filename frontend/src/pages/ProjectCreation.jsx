import React from 'react';

function ProjectCreation() {

  const styles = {
    '*': {
      margin: 0,
      padding: 0,
    },
    projectCreationPC: {
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    divPC: {
      backgroundColor: '#ffffff',
      height: '1080px',
      width: '1920px',
      overflow: 'hidden',
    },
    div2PC: {
      backgroundColor: '#20375d',
      height: '128px',
      left: 0,
      right: 0,
      position: 'absolute',
      top: 0,
      width: '1924px',
    },
    pPC: {
      color: '#d9d9d9',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '48px',
      fontWeight: 400,
      height: '60px',
      left: '143px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: '34px',
      width: '264px',
    },
    imagePC: {
      height: '87px',
      left: '33px',
      objectFit: 'cover',
      position: 'absolute',
      top: '18px',
      width: '86px',
    },
    textWrapper1PC: {
      color: '#fffdfd',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '1684px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      top: '51px',
      width: '202px',
    },
    textWrapper2PC: {
      color: '#fffdfd',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '48px',
      fontWeight: 400,
      left: '772px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: '32px',
      width: '376px',
    },
    div3PC: {
      height: '952px',
      top: '128px',
      position: 'absolute',
      width: '1920px',
      left: '600px',
    },
    textWrapper3PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '46px',
    },
    textWrapper4PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '178px',
    },
    textWrapper5PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '310px',
    },
    textWrapper6PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '442px',
    },
    textWrapper7PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '574px',
    },
    textWrapper8PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '33px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '706px',
    },
    textWrapper9PC: {
      color: '#000000',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '20px',
      fontWeight: 400,
      left: '1215px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 2,
      top: '838px',
    },
    rectangle1PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '443px',
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
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '216px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle3PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '443px',
      top: '348px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle4PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '480px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle5PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '237px',
      top: '612px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle6PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '33px',
      position: 'absolute',
      zIndex: 1,
      width: '443px',
      top: '744px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '2px solid #000000' 
    },
    rectangle7PC: {
      backgroundColor: '#d9d9d9',
      borderRadius: '10px',
      height: '48px',
      left: '1156px',
      position: 'absolute',
      zIndex: 1,
      width: '186px',
      top: '825px',
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
      top: '750px', // Adjusted to match textWrapper9PC top position
      left: '1215px', // Adjusted to match textWrapper9PC left position
      width: '186px',
      border: '2px solid #000000' 
    },
  };

  return (
    <div style={styles.projectCreationPC}>
      <div style={styles.divPC}>
        <div style={styles.div3PC}>
          <div style={styles.textWrapper3PC}>Title</div>
          <input type="text" style={styles.rectangle1PC} placeholder=" " />
          <div style={styles.textWrapper4PC}>Team Members</div>

          <input type="text" style={{ ...styles.rectangle2PC, left: '33px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle2PC, left: '294px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle2PC, left: '555px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle2PC, left: '816px' }} placeholder=" " />

          <div style={styles.textWrapper5PC}>Customer</div>
          <input type="text" style={styles.rectangle3PC} placeholder=" " />
          <div style={styles.textWrapper6PC}>Technologies Used</div>

          <input type="text" style={{ ...styles.rectangle4PC, left: '33px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle4PC, left: '294px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle4PC, left: '555px' }} placeholder=" " />
          <input type="text" style={{ ...styles.rectangle4PC, left: '816px' }} placeholder=" " />

          <div style={styles.textWrapper7PC}>Training Requests</div>
          <input type="text" style={styles.rectangle5PC} placeholder=" " />
          <div style={styles.textWrapper8PC}>Element Chief</div>
          <input type="text" style={styles.rectangle6PC} placeholder=" " />

          <button style={styles.buttonPC} onClick={() => window.location.href = '/dashboard'}>Create</button>

          {/* Note: plussign and seraph_logo are not used in the component */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCreation;
