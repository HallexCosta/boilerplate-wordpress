### Required Knowledge for Development and Running the Project
- Docker  
- WordPress  
- MySQL  
- NPM / NVM

#### Active mode api of WordPress 
Url: http://localhost:3001/wp-admin/options-permalink.php <br>
Enable option: Custom structure (/blog/%postname%/) <br>

#### Install plugins 
By default, the boilerplate lists the most used plugins for development, you can install, configure, and use them if necessary.

## Run WordPress in Docker
```
# Clone the repository
git clone git@github.com:hallancosta/boilerplate-wordpress <your website folder name>

# Run docker
sudo docker compose -f docker-compose.yml up

# Change the own folder access
sudo chown www-data:www-data <your website folder name>

# Wait 5 seconds to run full permission on your website folder name
sudo chmod 777 -R <your website folder name>

# If necessary clear containers running
# bash
sudo docker rm -f $(sudo docker ps -aq)
# fish
sudo docker rm -f (sudo docker ps -aq)
```

## Run build to generate style.css and bundle.js
```
cd <your website folder name>

# Enter the folder
cd build

# Change node version
nvm use 16

# Install dependencies
npm install --legacy-peer-deps

# Run the build with live relaod
npm run watch:docker
```

#### Configure .env
Change the environment variables according to each project environment
```
cp ./src/env.example cp ./src/env
```

# Wordpress 
Url: http://localhost:3001 <br>
Username: <br> 
Password: <br> 

#### Access live reload
Url: http://localhost:12345

# PhpMyAdmin - Database Manager
Url: http://localhost:8080 <br>
Username: root <br>
Password: secret

# Ngrok
Url: http://localhost:4551 <br>

# Repository Branchs
production - Used to deploy in production environment<br>
staging - Used to develop and test locally and deploy staging environment

#### Folder ./build
Used to create a custom theme that goes in the WordPress themes folder and wpapp 

#### How to code a new project
1. Search and change the name of every place that has <b>"wpapp"</b> to the <b>new name</b>, for example <b>"apple"</b>
2. Turn off the build in docker and, if necessary, delete ./docker/mysql to run the configuration again with the new name in containers, variables and the theme

# Configure the repository secrets for deploy CI/CD
```
FTP_PRODUCTION_HOST: ftp.test.com.br
FTP_PRODUCTION_USERNAME: test
FTP_PRODUCTION_PASSWORD: test123
FTP_PRODUCTION_PROJECT_DIR: domains/hallan.com.br/public_html/
FTP_PRODUCTION_DEPLOY_ENV: INSERT ALL LINES FROM .env

FTP_STAGING_HOST: ftp.testhallan.com.br
FTP_STAGING_USERNAME: testhallan
FTP_STAGING_PASSWORD: testhallan123
FTP_STAGING_PROJECT_DIR: domains/hallan.com.br/public_html/
FTP_STAGING_DEPLOY_ENV: INSERT ALL LINES FROM .env
```

# Duplicator

### To Install Using Duplicator
1. Place the files in the root directory of the domain on the server.
2. Append the installer name to the domain URL. Example:  
   `https://sitedomainproduction.com.br/18112024_sitedomainproduction_d93b86c7197b86e58019_20241118201454_installer.php`
3. Follow the installer steps and provide the database credentials.


# Author
| [<img src="https://avatars2.githubusercontent.com/u/60573155?s=115&v=3"><br><sub>@HallanCosta</sub>](https://github.com/HallanCosta) |
| :---: |
