const allUsers = [
    {
        "id": 0,
        "username": "Sakshi"
    },
    {
        "id": 1,
        "username": "Pawan"
    },
    {
        "id": 2,
        "username": "Ajay"
    },
    {
        "id": 3,
        "username": "Albert"
    },
    {
        "id": 4,
        "username": "Yogesh"
    },
    {
        "id": 5,
        "username": "Aman"
    },
    {
        "id": 6,
        "username": "Prajwal"
    },
    {
        "id": 7,
        "username": "Nrupul"
    },
    {
        "id": 8,
        "username": "Shweta"
    },
    {
        "id": 9,
        "username": "Kajal"
    }
]

const addUser = (name) => {
    const payload = {
        id: Math.random(),
        username:name
    }
    allUsers.push(payload);
    return allUsers
}

module.exports = {allUsers,addUser}