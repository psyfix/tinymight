# Tinymight

Tinymight is a Word-addin that takes docx files and pastes them into Word making reporting easier.

### Enivronment Requirements
In order to setup and run the application:
1. node packages; multer, helmet, office-addin, office-addin-dev-certs
2. python3
3. cron

### Server Deployment
1. Setup a valid domain and create a subdomain dns A record that will point to the servers IP.
2. Change the `webpack.config.js` file `urlPRod` variable to reflect the domain created.
3. Add the `.docx` files to the wordFindings folder.
4. Configure a server with the environment requirements.
5. Copy the code to the server.
6. Change the user and group ownership of all files to root.
7. Configure the TLS certificates using letsencrypt. (Replace paths to keys in the `tinymight.js` file)
8. Run the `cronjob.sh` file.  

### Contributing
1. Clone the repository.
2. Go to the src directory.
3. Add any extra `.docx` templates to its respective category directory.
4. edit the `updateFindings.py` file and update the `BASE_PATH` variable to represent your local path.
5. Start the debug server. `npm run debug`
6. Push changes to a new branch and create a merge request. 

### Updating Templates
1. SSH into the server.
2. Replace the templates folder with the updated findings.
3. Run the updateFindings.py script.
4. Restart the server.


## Demo

