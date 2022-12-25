// import React from 'react';
// import ReactDOM from 'react-dom';
// import scriptLoader from 'react-async-script-loader';

// class PaypalButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showButton: false,
//     };

//     window.React = React;
//     window.ReactDOM = ReactDOM;
//   }

//   componentDidMount() {
//     const {
//       isScriptLoaded,
//       isScriptLoadSucceed
//     } = this.props;

//     if (isScriptLoaded && isScriptLoadSucceed) {
//       this.setState({ showButton: true });
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     const {
//       isScriptLoaded,
//       isScriptLoadSucceed,
//     } = nextProps;

//     const isLoadedButWasntLoadedBefore =
//       !this.state.showButton &&
//       !this.props.isScriptLoaded &&
//       isScriptLoaded;

//     if (isLoadedButWasntLoadedBefore) {
//       if (isScriptLoadSucceed) {
//         this.setState({ showButton: true });
//       }
//     }
//   }

//   render() {
//     // Todo
//   }






// }

// export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);