module.exports = function(app , request , urlencodedParser , url) {
    request.post({
        url: url,
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