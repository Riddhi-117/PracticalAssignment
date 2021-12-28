// //http://localhost:6001/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020

var http = require('http');

const score = require('cricket-api-node');
const LIVE_MATCH = "https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020";
var server = http.createServer(function(req,res){
    score.match(LIVE_MATCH).then(live => {
        res.send(live);
 });
});

server.listen(8000);