
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Push.send({
                channels: [channel],
                data: data
                }, { useMasterKey: true });

Parse.Cloud.afterSave(Parse.User, function(request, response) {
    if (!request.object.get("email")) {
        response.error("email is required for signup");
    } else {
        response.success();
    }
});
