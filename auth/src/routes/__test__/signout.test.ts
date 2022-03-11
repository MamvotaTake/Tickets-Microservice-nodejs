import request from 'supertest'
import { app } from '../../app'


it('clears the cookie after signiing out',  async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@gmail.com',
            password: '1999493'
        })
        .expect(201)

    const response = await request(app)
        .post('/api/users/signout')
        .send({})
        .expect(200)
    // expect(response.get('Set-Cookie')[0]).toEqual(
    //     'session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall5TW1JNU1EQmtaakU0T1Rsak56RTFOV0l4T1RJeVppSXNJbVZ0WVdsc0lqb2ljMmxuYm5Wd1FHVjRZVzF3YkdVdVkyOXRJaXdpYVdGMElqb3hOalEzTURJeU1Ea3pmUS5VUEhMc0JRVmQ5UWk4VTNlYk5JTEdZNExPSTZfRUhWWWtSSUtJR0Z0N3dRIn0=; path=/; httponly');
})