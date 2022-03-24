const core = require('@actions/core');
const axios = require('axios');
const { exec } = require('child_process');
const id = core.getInput("id")

try {
  axios.get('https://api.lanyard.rest/v1/users/', id)
  .then((response) => {
    const json = response.data.data
    const status = json.discord_status
    console.log("User's status:", status)
    const file = core.getInput("file")
    if (status == 'online') {
        exec(`sed -i "s/⚪/🟢/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec(`sed -i "s/🔴/🟢/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec(`sed -i "s/🟡/🟢/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }

    if (status == 'dnd') {
        exec(`sed -i "s/⚪/🔴/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec(`sed -i "s/🟢/🔴/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec(`sed -i "s/🟡/🔴/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }  

    if (status == 'idle') {
        exec(`sed -i "s/⚪/🟡/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec(`sed -i "s/🟢/🟡/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec(`sed -i "s/🔴/🟡/g" ${file}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }       
  });
}

catch (error) {
    core.setFailed(error.message);
  }
