const userModel = require ('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password) {
        throw new Error('Missing required fields');
    }
    const user = new userModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}
