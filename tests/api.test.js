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
                    "title": "���⮢� ����� 1",
                    "body": "���⮢�� ���⥭� 1"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "���⮢� ����� 2",
                    "body": "���⮢�� ���⥭� 2"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "���⮢� ����� 2",
                    "body": "���⮢�� ���⥭� 3"
                }
            ]
        };
    })
    test('��ਬ���� ����?� �? ��஭�쮣� API', async () => {
        axios.get.mockReturnValue(response)
        const posts = await fetchPosts();
        expect((axios.get)).toBeCalledTimes(1) // ��ॢ?���, � �砡 1 ࠧ �㫮 ��������� �� ������ get � axios
        expect(posts).toBeInstanceOf(Array); // ��?��� ��ᨢ
        expect(posts.length).toBeGreaterThan(0); // ��ॢ?���, � ��ᨢ �� ��஦�?�
        expect(posts[0]).toHaveProperty('id'); // ��ॢ?��� �������� ��'��
        expect(posts[1].id).toEqual(2); // ��ॢ?��� ��������� ��ᨢ: ��㣨� ���� ��� id = 2
        expect(posts[1].title).toEqual('���⮢� ����� 2'); // ��ॢ?��� ��������� ��ᨢ: ����� ��㣮�� �����
    });
})

