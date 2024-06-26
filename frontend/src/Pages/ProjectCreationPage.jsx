import React from 'react';
import plussign from '../assets/Plus_Sign.png';

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
    },
    plusSign1PC: {
      left: '1095px',
      position: 'absolute',
      top: '221px',
    },
    plusSign2PC: {
      left: '1095px',
      position: 'absolute',
      top: '480px',
    },
  };

  return (
    <div style={styles.projectCreationPC}>
      <div style={styles.divPC}>
        <div style={styles.div3PC}>
          <div style={styles.textWrapper3PC}>Title</div>
          <div style={styles.rectangle1PC} />
          <div style={styles.textWrapper4PC}>Team Members</div>

          <div style={{ ...styles.rectangle2PC, left: '33px' }} />
          <div style={{ ...styles.rectangle2PC, left: '294px' }} />
          <div style={{ ...styles.rectangle2PC, left: '555px' }} />
          <div style={{ ...styles.rectangle2PC, left: '816px' }} />

          <div style={styles.textWrapper5PC}>Customer</div>
          <div style={styles.rectangle3PC} />
          <div style={styles.textWrapper6PC}>Technologies Used</div>

          <div style={{ ...styles.rectangle4PC, left: '33px' }} />
          <div style={{ ...styles.rectangle4PC, left: '294px' }} />
          <div style={{ ...styles.rectangle4PC, left: '555px' }} />
          <div style={{ ...styles.rectangle4PC, left: '816px' }} />

          <div style={styles.textWrapper7PC}>Training Requests</div>
          <div style={styles.rectangle5PC} />
          <div style={styles.textWrapper8PC}>Element Chief</div>
          <div style={styles.rectangle6PC} />

          <div style={styles.textWrapper9PC}>Create</div>
          <div style={styles.rectangle7PC} />

          <img style={styles.plusSign1PC} alt="Group" src={plussign} />
          <img style={styles.plusSign2PC} alt="Group" src={plussign} />
        </div>

      </div>
    </div>
  );
}

export default ProjectCreationPage;
