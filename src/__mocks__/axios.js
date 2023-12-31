const mockResponse = {
    data: {
        results: [
            {
                "name": {
                    "first": "Ernesto",
                    "last": "Angulo"
                },

                "login": {
                    "username": "orangeduck857",
                },

                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/57.jpg"
                }
            }
        ]
    }
}
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}