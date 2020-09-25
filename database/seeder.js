const faker = require('faker');
const { saveAgentData } = require('.');

const createData = (num) => {
  const agentTypes = ['Listing Agent', 'Premier Agent'];
  const propertyIdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 100; i < num + 100; i++) {
    const data = {};
    data.agentId = i;
    data.name = faker.name.findName();
    data.picture = faker.image.imageUrl();
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
