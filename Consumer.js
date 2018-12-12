var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('120.105.129.50:2181'),

    consumer = new Consumer(
        client,
        [
            { topic: 'topic', partition: 0 }
        ],
        {
            autoCommit: true
        }
    );

consumer.on('message', function (message) {
    console.log(message);

});
