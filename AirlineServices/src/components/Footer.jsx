import React from 'react';


const Footer = () => {

    const styles = {
        footer: {
          background: '#0C0404',
          color: '#fff',
          paddingTop: '20px',
          textAlign: 'center',
          bottom: 0,
          width: '100%',
        },
        text: {
          margin: 0,
          fontSize: '18px',
          lineHeight: '1.8',
          fontWeight:400
        },
      };
  return (
    <footer style={styles.footer}>
      <div>
        <p style={styles.text}>&copy; {new Date().getFullYear()} Flight Booking Service</p>
        <p style={styles.text}>Contact: flight204@gmail.com</p>
      </div>
    </footer>
  );
};



export default Footer;
