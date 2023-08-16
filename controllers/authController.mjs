export const signUp = (req, res) => {
    console.log('signup Api working')
    console.log(req.body);
    res.status(200).send({
        status: 'success',
        message: 'User registered successfully'
    })
}

export const logIn = (req, res) => {
    console.log('logIn Api working')
    res.status(200).send({
        status: 'success',
        message: 'User logged in successfully'
    })
}