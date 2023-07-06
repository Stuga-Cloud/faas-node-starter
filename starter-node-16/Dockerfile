FROM remymach/faas-node-16-server:1.0.0

COPY package*.json /root/
RUN npm install

# Don't forget to copy the index.js file and other files in root directory
COPY index.js /root/index.js