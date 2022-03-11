import request from 'supertest'
import { app } from '../../app'

it('fails when a email that does not exists is supplied', async () => {
    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'signin@example.com',
            password: 'we343522'
        })
        .expect(500)
});


it('fails when an incorrect password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@gmail.com',
            password: '1999493'
        })
        .expect(201)

    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@gmail.com',
            password: 'fgfgfyty'
        })
        .expect(500)


});

// it('responds with a cookie when given valid credentials', async () => {
//     await request(app)
//         .post('/api/users/signup')
//         .send({
//             email: 'test@gmail.com',
//             password: '1999493'
//         })
//         .expect(201)

//     const response = await request(app)
//         .post('/api/users/signin')
//         .send({
//             email: 'test@gmail.com',
//             password: '1999493'
//         })
//         .expect(200)

//     expect(response.get('Set-Cookie')).toBeDefined();


// })