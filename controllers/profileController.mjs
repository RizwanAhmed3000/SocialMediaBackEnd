export const getProfile = (req, res) => {
    console.log('get profile Api working');
    console.log(req.params);
    res.status(200).send({
        status: 'success',
        data: [],
        message: 'geting user data'
    })
};

export const updateProfile = (req, res) => {
    console.log(req.body)
    res.status(200).send({
        status: 'success',
        data: [],
        message: 'geting user data'
    })
}