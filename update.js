/** const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response.discord_status);
  })

  **/


/**
const axios = require('axios');
axios.get('https://api.lanyard.rest/v1/users/893762371770802227')
  .then(res => {
    console.log(res.data);
  });  
  **/
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
    console.log(file)
    exec('export FILE=', file, (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
    
      console.log(`${stdout}`);
    });
    if (status == 'online') {
        exec('sed -i "s/⚪/🟢/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('sed -i "s/🔴/🟢/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('sed -i "s/🟡/🟢/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }

    if (status == 'dnd') {
        exec('sed -i "s/⚪/🔴/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('sed -i "s/🟢/🔴/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('sed -i "s/🟡/🔴/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });                                            
    }  

    if (status == 'idle') {
        exec('sed -i "s/⚪/🟡/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });

          exec('sed -i "s/🟢/🟡/g" $FILE', (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`${stdout}`);
          });
          exec('sed -i "s/🔴/🟡/g" $FILE', (err, stdout, stderr) => {
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
