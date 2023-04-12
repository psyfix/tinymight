# Tinymight

The Tinymight Word Add-in is hosted on an Azure instance.

### Deploying
1. Copy the repository to the server, replacing the current implementation 
2. Change the user and group to root for all the files 
3. run the `cron/cronjob.sh` file manually or wait until the cronjob manually executes the file 

### Adding a new template
To add a new template:
1. Create a new `.docx` file with the template correctly formatted
2. Copy the new file to its respective category in the repository
3. Either wait 24 hours until the python script runs and updates the online tool, or manually log in to the Azure server and run `updateFindings.py`

### How to Contribute
The requirements to run the development server are: 
- npm
- python3

1. Clone the repository
2. Navigate to the src directory
3. Start the development server 
    `npm run dev-server`
4. Add any extra `.docx` templates to the respective category directory (or create a new one)
5. edit the `updateFindings.py` file and update the `BASE_PATH` variable to represent your own path
6. [Sideload the application into Word](https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins) using the `dev-manifest.xml`
7. start committing, just don't push any breaking changes  
