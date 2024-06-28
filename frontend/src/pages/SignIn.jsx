import React from 'react';
import seraph_logo_SI from '../assets/seraph_logo.png';
import dod_logo_SI from '../assets/DOD_Logo.png';

function SignIn() {

  const styles = {
    '*': {
      margin: 0,
      padding: 0,
    },
    signInSI: {
      backgroundColor: '#20375d',
      height: '1080px',
      width: '1920px',
      overflow: 'hidden',
      position: 'relative',
    },
    overlapGroupWrapperSI: {
      height: '100%',
      width: '100%',
      margin: '10px',
    },
    overlapGroupSI: {
      height: '100%',
      width: '100%',
    },
    textWrapperSI: {
      color: '#ffffff',
      fontFamily: 'Lexend-Regular, Helvetica',
      fontSize: '150px',
      fontWeight: 400,
      left: '100px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      textShadow: '15px 15px 10px rgba(0, 0, 0, 0.25)',
      whiteSpace: 'nowrap',
      width: '840px',
      top: '453px',
    },
    textWrapper2SI: {
      color: '#000000',
      fontFamily: 'Lexend-Light, Helvetica',
      fontSize: '48px',
      fontWeight: 300,
      height: '60px',
      left: '1132px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 3,
      top: '471px',
    },
    textWrapper3SI: {
      color: '#000000',
      fontFamily: 'Lexend-Light, Helvetica',
      fontSize: '48px',
      fontWeight: 300,
      height: '60px',
      left: '1132px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      zIndex: 3,
      top: '616px',
    },
    textWrapper4SI: {
      color: '#000000',
      fontFamily: 'Lexend-Light, Helvetica',
      fontSize: '48px',
      fontWeight: 300,
      height: '60px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      zIndex: 3,
      left: '291px',
      top: '675px',
    },
    textWrapper5SI: {
      color: '#000000',
      fontFamily: 'Lexend-Light, Helvetica',
      fontSize: '48px',
      fontWeight: 300,
      height: '60px',
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      zIndex: 3,
      left: '336px',
      top: '771px',
    },
    rectangle1SI: {
      backgroundColor: '#ffffff',
      top: '95px',
      bottom: '139px',
      position: 'absolute',
      height: '898px',
      right: '105px',
      width: '790px',
      opacity: 0.8,
      borderRadius: '30px',
      zIndex: 1,
      fontSize: '30px',
    },
    rectangle2SI: {
      position: 'absolute',
      borderRadius: '30px',
      zIndex: 2,
      backgroundColor: '#D9D9D9',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      left: '67px',
      right: '66px',
      top: '356px',
      height: '76px',
      fontSize: '30px',
      paddingLeft: '20px'
    },
    rectangle3SI: {
      position: 'absolute',
      borderRadius: '30px',
      zIndex: 2,
      backgroundColor: '#D9D9D9',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      left: '67px',
      right: '66px',
      top: '501px',
      height: '76px',
      paddingLeft: '20px'
    },
    rectangle4SI: {
      position: 'absolute',
      borderRadius: '30px',
      zIndex: 2,
      backgroundColor: '#D9D9D9',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      width: '288px',
      height: '76px',
      left: '260px',
      right: '261px',
      top: '662px',
      fontSize: '30px',
    },
    rectangle5SI: {
      position: 'absolute',
      borderRadius: '30px',
      zIndex: 2,
      backgroundColor: '#D9D9D9',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      width: '288px',
      height: '76px',
      left: '260px',
      right: '261px',
      top: '761px',
      fontSize: '30px',
    },
    dodLogoSI: {
      height: '254px',
      left: '209px',
      position: 'absolute',
      top: '51px',
      width: '373px',
      zIndex: 3,
    },
    seraphLogoSI: {
      width: '1378px',
      height: '1258px',
      overflow: 'hidden',
      top: '-89px',
      left: '-159px',
      bottom: '-89px',
      position: 'fixed',
      opacity: 0.25,
    },
  };



  return (
    <div style={styles.signInSI}>
      <div style={styles.overlapGroupWrapperSI}>
        <div style={styles.overlapGroupSI}>
          <img className="seraph_logo-SI" alt="Seraph Logo" src={seraph_logo_SI} style={styles.seraphLogoSI} />
          <p className="text-wrapper-SI" style={styles.textWrapperSI}>S E R A P H</p>

          <div className="rectangle-1-SI" style={styles.rectangle1SI}>
            <div className="rectangle-2-SI" style={styles.rectangle2SI} />
            <div className="rectangle-3-SI" style={styles.rectangle3SI} />
            
            {/* Username Textbox */}
            <input type="text" style={styles.rectangle2SI} placeholder="Username " className="input-box"/>
            
            {/* Password Textbox */}
            <input type="password" style={styles.rectangle3SI} placeholder="Password " className="input-box" />
            
            {/* CAC SOS Button */}
            <button className="button-box" style={styles.rectangle4SI} > CAC SSO </button>
            
            {/* Login Button */}
            <button className="button-box" style={styles.rectangle5SI} onClick={() => window.location.href = '/dashboard'}> Login </button>

          
            <img className="dod_logo-SI" alt="DOD Logo" src={dod_logo_SI} style={styles.dodLogoSI} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
