const fetchPosts = require('../src/api');
const axios = require('axios');

jest.mock('axios')

describe('api:fetchPosts', () => {
    let response = {};
    beforeEach(() => {
        response = {
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Тестова назва 1",
                    "body": "Тестовий контент 1"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Тестова назва 2",
                    "body": "Тестовий контент 2"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "Тестова назва 2",
                    "body": "Тестовий контент 3"
                }
            ]
        };
    })
    test('Отримання пост?в з? стороннього API', async () => {
        axios.get.mockReturnValue(response)
        const posts = await fetchPosts();
        expect((axios.get)).toBeCalledTimes(1) // Перев?ряємо, що хочаб 1 раз було викликано до запуску get у axios
        expect(posts).toBeInstanceOf(Array); // Оч?куємо масив
        expect(posts.length).toBeGreaterThan(0); // Перев?ряємо, що масив не порожн?й
        expect(posts[0]).toHaveProperty('id'); // Перев?ряємо структуру об'єкта
        expect(posts[1].id).toEqual(2); // Перев?ряємо замоканий масив: другий пост має id = 2
        expect(posts[1].title).toEqual('Тестова назва 2'); // Перев?ряємо замоканий масив: назву другого посту
    });
})

