const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/app');
const data = require('./config/data');

const app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.listen(config.appPort, () =>
  console.log(`Status: OK \nListening port ${config.appPort}...`)
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

const checkUser = userData => {
  let status = false;
  data.map(item => {
    (item['email'] === userData['email'] && item['password'] === userData['password'])
    ? status = true : 2 });
  return status;
};

app.post('/auth', async (req, res) =>{
  try {
    console.log(req.body);
    res.send(await checkUser(req.body));
  }
  catch (e) {
    console.log(e);
  }
});

app.post('/send-object', (req, res) =>{
  console.log(req.body);
  res.send(`Send Object Status: OK \n Object: ${JSON.stringify(req.body)}`);
});

const trafficObjectCreator = async () => {
  let ArrObj = [];
  let count = await (Math.round(Math.random() * 17));
  for (let i = 0; i < (count > 5 ? count : 6); i++) {
    ArrObj[i] = {
      traffic: (Math.round(Math.random() * 24)),
      title: `traffic-item-${i}`
    }
  }
  return ArrObj
};

app.post('/traffic-table', async (req, res) => {
  try {
    console.log(req.body);
    res.send(await trafficObjectCreator());
  }
  catch (e) {
    console.log(e)
  }
});