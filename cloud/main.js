
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Push.send({
                channels: [channel],
                data: data
                }, { useMasterKey: true });

