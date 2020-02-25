# data-crawling-poc

PoC app for run remote script in background which collect cookies from browser and post to given remote server/database

---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.0

Node version should be 10.16.x and above

###
### NPM installation
If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/vvavdiya/data-crawling-poc.git
    $ cd data-crawling-poc
    $ npm install


## Running the project

    $ npm start
    
 if server started successfully following log will be printed console 
    
    $ Connected to port 8080
 

## Test Server status

    http://localhost:8080/serverstatus
 
 ## Open Web page
 
    http://localhost:8080/index.html
    
 ## View console log
 
 Open google chrome dev tool and view log in browser console log
