var https=require('https');
var url ='https://cricket-api.vercel.app/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/32057/3rd-test-india-tour-of-england-2021';

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            console.log(json);
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});