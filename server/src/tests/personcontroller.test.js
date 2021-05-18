const axios = require('axios');

test('create new person object and expect the created person object to be returned ', async () => {    
    let personToBeSent = {
        name: "hejsan",
        password: "test"
    }

    let apiResponse = {}
    await axios.post('http://localhost:3000/persons', personToBeSent)
    .then(response => {
        apiResponse = response.data

        //controller returns new person with id, id needs to be removed
        delete apiResponse.id
    })

    expect(personToBeSent).toEqual(apiResponse);

  });

