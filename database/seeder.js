// Load the SDK for JavaScript
const AWS = require('aws-sdk');
const faker = require('faker');
const { saveAgentData } = require('.');

AWS.config.loadFromPath('./config.json');

// Set the Region
AWS.config.update({ region: 'us-west-2' });

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
const bucketParams = {
  Bucket: 'realiaagentimages',
};


const createData = (num) => {
  const agentTypes = ['Listing Agent', 'Premier Agent'];
  const propertyIdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < num; i++) {
    const data = {};
    data.agentId = i;
    data.name = faker.name.findName();
    data.picture = `https://realiaagentimages.s3-us-west-1.amazonaws.com/${i}.jpg`;
    data.phone = faker.phone.phoneNumber();
    data.email = faker.internet.email();
    data.agentType = agentTypes[Math.floor(Math.random() * agentTypes.length)];
    data.propertyIds = propertyIdArray.slice(Math.floor(Math.random() * propertyIdArray.length));
    data.recSalesCount = Math.floor(Math.random() * 100);
    data.avgRating = (Math.random() * 5.0).toFixed(1);
    data.ratingCount = Math.floor(Math.random() * 50);
    saveAgentData(data);
  }
};

createData(20);
