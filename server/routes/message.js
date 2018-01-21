const express = require('express');
const router = express.Router();

const messages = {
    'app': {
        'title'  : 'Mean App', 
        'welcome': 'Welcome to Mean application', 
    }  
};

router.get('/', (request, response) => {
    response.setHeader('content-type', 'application/json');
    response.send(messages);
});


module.exports = router;
