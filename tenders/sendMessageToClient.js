const io = require('../app.js');
const clients = new Set();

io.on('connection', (socket) => {
    clients.add(socket);
});

module.exports = (data) => {
    for (const client of clients) {
        client.emit('message', JSON.stringify(data));
    }
};


