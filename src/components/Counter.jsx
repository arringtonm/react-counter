import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function handleUpVoteButton() {
    props.onCounterUp(props.title);
  }

  function handleDownVoteButton() {
    props.onCounterDown(props.title);
  }

  let styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100px',
      // padding: '10px',
      border: '1px solid #DDD',
      marginBottom: '10px',
      fontFamily: 'sans-serif',
      fontWeight: '200'
    },
    header: {
      width: '100px',
      borderBottom: '1px solid #ddd',
      backgroundColor: 'f6f6f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8'
    },
    arrowStyle: {
      width: '15px',
      height: '15px',
      transform: 'rotate(-90deg)',
      marginBottom: '-12px',
      marginTop: '10px'
    },
    arrowStyleUpsideDown: {
      height: '15px',
      width: '15px',
      transform: 'rotate(90deg)',
      marginTop: '-12px',
      marginBottom: '10px'
    },

  }


  return(
    <div style={styles.container}>
      <div style={styles.header}>
        <p>{props.title}</p>
      </div>
      <img onClick={handleUpVoteButton} style={styles.arrowStyle} src='http://laoblogger.com/images/arrow-pictures-2.jpg' />
      <p>{props.number}</p>
      <img onClick={handleDownVoteButton} style={styles.arrowStyleUpsideDown} src='http://laoblogger.com/images/arrow-pictures-2.jpg' />

    </div>
  );

}



//       counter: {
//         fontSize: '24px',
//         lineHeight: '10px',
//         color: '#666'
//       }
//     };
//
//     return(
//
//       <div style={styles.containerStyle}>
//         <img onClick={this.onUpClick} style={styles.arrowStyle} src='https://cdn.pixabay.com/photo/2013/07/13/09/50/arrow-156118_1280.png' />
//         <p style={styles.counter}>{this.props.counter}</p>
//         <img onClick={this.onDownClick} style={styles.arrowStyleUpsideDown} src='https://cdn.pixabay.com/photo/2013/07/13/09/50/arrow-156118_1280.png' />
//       </div>
//     );




Counter.PropTypes = {
  number: PropTypes.number
}

export default Counter;
