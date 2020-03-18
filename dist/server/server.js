const express = require('express') //const ne veut pas dire constant ca veut dire qu'on peut plus lui infecter d'autre valeur
const app = express()
const port =3000
const path = require('path')


app.get('/api/version', function (req, res) {
  res.send('Hi aymeric')
})

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.get('*',function(req,res,next){
//   var e = new Error('page introuvable');
//   e.status = 404;
//   next(e);
// })
app.use('/',express.static(path.resolve(__dirname,'../client/dist')))

app.use('*',function(req,res){
  res.status(404).sendFile(path.resolve(__dirname,'../client/dist/404.html'))
})
// error handler
// app.use(function (err, req, res,next) {
//   res.status(err.status|| 400).json({
//     message: err.message || "page introuvablo",
//       error: req.app.get('env') === 'development' ? err : {}
//   })
// });

// App Server Connection
app.listen(port, () => console.log(`app is running on port ${port}`))