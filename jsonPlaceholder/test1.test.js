const axios = require('axios')

describe('GET methods', () => {
    beforeAll(() => {
        axios.interceptors.request.use(config => {
            console.log('=== Initiated REQUEST ===');
            console.log('URL: ' + config.url);
            console.log('Method: ' + config.method.toUpperCase());
            if(config.data){
                console.log('Body: ' + JSON.stringify(config.data, null, 2));
            }
            return config;
        },
        error => {
            console.error('Request error: ' + error);
            return Promise.reject(error);
        });

        axios.interceptors.response.use(response => {
            console.log('=== Received RESPONSE ===');
            console.log('Status: ' + response.status);
            console.log('Status text: ' + response.statusText);
            console.log('Data: ' + JSON.stringify(response.data, null, 2));
            return response;
        },
        error => {
            console.error('Response error: ' + error);
            return Promise.reject(error);
        });
    });

    test('Test 1: Comments with ID = 25', async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?id=25', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const dataTest1 = response.data;
        const idTest1 = dataTest1[0].id;
        expect(response.status).toEqual(200);
        expect(idTest1).toEqual(25);
    });

    test('Test 2: Add new comment', async() => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'newTitle',
            body: 'newBody',
            userId: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(201);
        expect(response.statusText).toEqual('Created');
    });

    test('Test 3: Update user email', async() => {
        const response = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
            email: 'new_updated_email@gmail.com'
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data.email).toContain('new_updated_email@gmail.com');
    });

    test('Test 4: Delete toDO task', async() =>{
        const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/7', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.statusText).toEqual('OK');
    });

    test('Test 5: Get all photos for requested album', async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.statusText).toEqual('OK');
    });

});