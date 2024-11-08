# Form.IO File Storage using URL component

# Overview
The repository demonstrates the way of setting up local server for handling file storage from Form.IO and also includes the clear instruction with the usage of URL in file component
 

# Prerequisites

Make sure Node.js and multer installed. I have set the package installed in package.json

# Clone repository

The App is configured in port 4000. Make sure nothing else is already running on these ports.

Clone the repository:
```sh
git clone https://github.com/GaganGowda89/formIO-file-Storage-URL-component.git
```

# Install dependencies
```sh
cd /formIO-file-Storage-URL-component.git
```

```sh
npm i
```
# Start the server
```sh
npm start
```
This will start the nodemon with message "Server is running on port 4000"

# Form.io configuration

1. Select "File component" in Form.io
2. Select "Storage option" as URL
3. Set 'upload URL' to http://localhost:4000/upload
4. You can also set the 'directory URL' which is optional to http://localhost:4000/upload/images
5. Once you upload the file in regular form if successful you should see the image in 'upload/images directory.

