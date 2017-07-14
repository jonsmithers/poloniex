var autobahn = require('autobahn');

var urls = {
  websocket: "wss://api.poloniex.com"
}

var connection = new autobahn.Connection({url: urls.websocket, realm: 'realm1'});

connection.onopen = session => {
  console.log('websocket opened');
 
  // 1) subscribe to a topic 
  session.subscribe('BTC_XMR', marketEvent => {
    console.log("BTC_XMR:", marketEvent);
  });
  // session.subscribe('ticker', tickerEvent);
  // session.subscribe('trollbox', trollboxEvent);


  // 2) publish an event 
  // session.publish('com.myapp.hello', ['Hello, world!']);

  // 3) register a procedure for remoting 
  // session.register('com.myapp.add2', args => {
  //   return args[0] + args[1];
  // });

  // 4) call a remote procedure 
  // session.call('com.myapp.add2', [2, 3]).then(
  //    function (res) {
  //       console.log("Result:", res);
  //    }
  // );
};

connection.onclose = () => {
  console.log("websocket closed");
}
 
console.log('opening websocket');
connection.open();



// Rx.Observable.fromConnection({url: urls.websocket, realm: 'realm1'});

// var ws = new WebSocket(urls.websocket);
// ws.on('open', () => {
//   console.log('open');
//   ws.send('hi', error => {
//     if (!error) {
//       console.log("success");
//     } else {
//       console.log('error', error);
//     }
//   });
// });
// ws.on('message', data => {
//   console.log('data', data);
// });
