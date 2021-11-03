const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com' },
               { id: 2, username: 'test2', password: 'test2', firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' }];

module.exports = {
    authenticate,
    getAll,
    updateUser
};

async function authenticate({ username, password }) {
    console.log("calling authentication "+username+ ","+password);
    console.dir(username);
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

async function updateUser(id, change) {
    console.log("Changing user id="+id);
    const user = users.find(u => u.id == id);
    console.dir(user);
    console.dir(change);
    if (change.email) user.email = change.email;
    if (!user) throw 'Unknown userId';

    return {
        ...omitPassword(user)
    };    
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}