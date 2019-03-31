module.exports = function(app , request , urlencodedParser) {
    request.post({
        url: "https://hooks.slack.com/services/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",
        json: true,
        body: {
            "text": "Hello! This is Slack-Node-App"
        }
    } , (error , res , body) => {
        if(error) {
            throw error;
        }
        //console.log(res);
        console.log(body);
    });
};