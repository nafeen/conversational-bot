var express            =   require('express');
var app                =   express();

app.get('/', function (req, res) {
  res.send('Converse with me...')
})

app.listen(3000, function () {
  console.log('Conversational App listening on port 3000!')
})