const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(cors());
app.use(express.json());

app.get('/pricelist', (req, res) => {
    // Fetch the price list data from a database or other data source
    const priceList = [
      {
        product: 'bottle',
        quantity: 1,
        price: 1.99
      },
      {
        product: 'pack',
        quantity: 6,
        price: 10.99
      },
      {
        product: 'box',
        quantity: 24,
        price: 39.99
      }
    ];
  
    // Return the price list data in the response
    res.json({ pricelist: priceList });
  });

app.post('/calculate', (req, res) => {
    const requiredBottles = req.body.requiredBottles;
    const prices = req.body.prices;
    const pieces = req.body.pieces;
  
    try {
      const result = calculate(requiredBottles, prices, pieces);
     
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error.');
    }
  });



const token = '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2';
const productId = '2d816e50-c55f-48dc-bba2-2d600202b79c';
const url = `https://api.maytapi.com/api/${productId}/sendMessage`;


app.post('/chat', async (req, res) => {
  const message = req.body.message;
  
  try {
    const response = await axios.post(url, {
      user: message,
      choice: 1,
      query: null
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
        
      }
    });

    const data = response.data;
    if (data.status === 'success') {
      const result = data.result;
      if (result === '1') {
        res.send('We will connect you to support shortly.');
      } else if (result === '2') {
        res.send('Sales will reach out to you.');
      } else {
        res.send('Invalid choice. Please try again.');
      }
    } else {
      res.send('Error occurred. Please try again.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error.');
  }
});




app.post('/chat1', async (req, res) => {
  const message = req.body.message;
  
  try {
    let response = null;
    if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
      response = await axios.post(url, {
        message: 'Hi, welcome to TechOn. How may we help you today?',
        text: '',
        to_number: '+905301111111',
        type: 'text'
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
        }
      });
    } else {
      response = await axios.post(url, {
        message: 'Invalid choice. Please try again.',
        text: '',
        to_number: '+905301111111',
        type: 'text'
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
        }
      });
    }

    const data = response.data;
    if (data.status === 'success') {
      const result = data.result;
      if (result === '1') {
        response = await axios.post(url, {
          message: 'We will connect you to support shortly.',
          text: '',
          to_number: '+905301111111',
          type: 'text'
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
          }
        });
        res.send('We will connect you to support shortly.');
      } else if (result === '2') {
        response = await axios.post(url, {
          message: 'Sales will reach out to you.',
          text: '',
          to_number: '+905301111111',
          type: 'text'
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
          }
        });
        res.send('Sales will reach out to you.');
      } else if (result === '3') {
        response = await axios.post(url, {
          message: 'Please type your query.',
          text: '',
          to_number: '+905301111111',
          type: 'text'
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-maytapi-key': '957fcaad-95b5-4ae2-ac61-a4a04a8f3ca2'
          }
        });
        res.send("Contact you shortly") ;
        }
        else {
          res.send('Invalid choice. Please try again.');
        }
      } else {
        res.send('Error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });



app.listen(3000, function() {
    console.log('Server listening on port 3000.');
});

