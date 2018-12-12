var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client('120.105.129.50:2181'),
    producer = new Producer(client),
    payloads = [
        { topic: 'topic', messages: ['hello world from nodejs'] }
    ];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(err || data);
        console.dir(data)
        client.close();
    });
});

producer.on('error', function (err) { })