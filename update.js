const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');
const { exec } = require('child_process');

try {
  axios.get('https://api.lanyard.rest/v1/users/893762371770802227')
  .then((response) => {
    const json = response.data.data
    const status = json.discord_status
    console.log(status)
    const file = core.getInput('file');
    exec('export file=', file, (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
    
      console.log(`${stdout}`);
    });
    if (status == 'online') {
        exec('./replace.sh ${file} ⚪ 🟢', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('./replace.sh ${file} 🔴 🟢', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('./replace.sh ${file} 🟡 🟢', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }

    if (status == 'dnd') {
        exec('./replace.sh ${file} ⚪ 🔴', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('./replace.sh ${file} 🟢 🔴', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('./replace.sh ${file} 🟡 🔴', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }  

    if (status == 'idle') {
        exec('./replace.sh ${file} ⚪ 🟡', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('./replace.sh ${file} 🟢 🟡', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('./replace.sh ${file} 🔴 🟡', (err, stdout, stderr) => {
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
