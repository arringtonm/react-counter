import React from 'react';
import Header from './Header';
import CounterList from './CounterList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterCounterArray: [
        {title: 'counter1', number: 0},
        {title: 'counter2', number: 0},
        {title: 'counter3', number: 0}
      ]
    }
    this.handleCountUp = this.handleCountUp.bind(this);

  }

  handleCountUp(title) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    for (var i = 0; i < newMasterCounterArray.length; i++) {
      if (newMasterCounterArray[i].title === title) {
        newMasterCounterArray[i].number+=1
      }
    }
    this.setState({masterCounterArray: newMasterCounterArray});
    // newMasterCounterArray.for
    // newMasterCounterArray.key.number+=1;
    // console.log(newMasterCounterArray);
  }

  // handleCountDown() {
  //   console.log('newNumber');
  //   let newNumber = this.state.number;
  //   newNumber -= 1;
  //   this.setState({number: newNumber});
  // }

  render(){
    return(
      <div>
        <Header/>
        <CounterList
          counterArray={this.state.masterCounterArray}
          onCounterUp={this.handleCountUp}
          onCounterDown={this.handleCountDown}/>
      </div>
    );
  }
}

export default App;
