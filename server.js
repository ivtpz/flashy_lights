var io = require('socket.io-client');
var PythonShell = require('python-shell');
var token = require('./secretToken.js');

// Turn pins 16 & 18 to high (ensures car motor is off)
PythonShell.run('off.py', function(err, res) {
  if (err) throw err;
})

// Connect to EC2 socket server
const clientSocket = io.connect('http://ec2-54-218-99-237.us-west-2.compute.amazonaws.com:3000', {
  query: 'token=' + token
});

var pyOptions = {
  mode: 'text',
  pythonPath: 'usr/bin/python',
  pythonOptions: ['-u']
}

clientSocket.on('flash', function() {
  PythonShell.run('flash.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('dance', function() {
  PythonShell.run('dance.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('on', function() {
  PythonShell.run('on.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('onYellow', function() {
  PythonShell.run('onYellow.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('onRed', function() {
  PythonShell.run('onRed.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('off', function() {
  PythonShell.run('off.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('offYellow', function() {
  PythonShell.run('offYellow.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('offRed', function() {
  PythonShell.run('offRed.py', function(err, res) {
    if (err) throw err;
  })

})
clientSocket.on('q', function() {
  PythonShell.run('q.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('w', function() {
  PythonShell.run('w.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('e', function() {
  PythonShell.run('e.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('r', function() {
  PythonShell.run('r.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('t', function() {
  PythonShell.run('t.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('y', function() {
  PythonShell.run('y.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('u', function() {
  PythonShell.run('u.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('i', function() {
  PythonShell.run('i.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('o', function() {
  PythonShell.run('o.py', function(err, res) {
    if (err) throw err;
  })
})
clientSocket.on('p', function() {
  PythonShell.run('p.py', function(err, res) {
    if (err) throw err;
  })
})
