
Parse.Cloud.define('hello', function(req, res) {
  res.success('Well hey there cowboy');
});


Parse.Push.send({
                channels: [channel],
                data: data
                }, { useMasterKey: true });

