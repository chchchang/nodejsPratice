const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extend:true}));
function isAuthorized(req,res,next){
  const auth = req.headers.authorization;
  if(auth === 'secretpassword'){
    next();
  }
  else{
    res.status(401);
    res.send('Not permitted');
  }
}
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized ,(req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

app.post("/record",(req, res) => {
  if(req.body.id == null)
    res.send("parameter not set");
  else
    res.send(req.body.id);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
