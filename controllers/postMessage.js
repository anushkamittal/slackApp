module.exports = function(app , request , urlencodedParser , url) {

    app.get('/slackmessenger' , (req , res) => {
        res.render('slackMessage');
    });

    app.post('/slackmessenger' , urlencodedParser , (req , res) => {
        request.post({
            url: url,
            json: true,
            body: {
                "text": req.body.message
            }
        } , (error , res , body) => {
            if(error) {
                throw error;
            }
            //console.log(res);
            console.log(body);
        });
        res.send('Thanks! Your query has succcessfully been recorded!');
    });

};