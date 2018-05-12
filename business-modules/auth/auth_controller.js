const renderResponseUtil = require('../../utils/RenderResponseUtil');
const ErrorMessage = require('../../utils/customMessage').ErrorMessage;
const auth_service = require('./auth_service');
module.exports = {
    signup,
    signin,
   
}
async function signup(req, res) {
    try {
        const Sign_up = await auth_service.register(req.body);
        renderResponseUtil.sendResponse(req, res, Sign_up)
    } catch (error) {
        res.send(error);
    }
}
async function signin(req, res,next) {
        
    try {
        const Sign_up = await auth_service.signin(req.body);
        renderResponseUtil.sendResponse(req, res, Sign_up)
    } catch (error) {
        res.send(error);
    }
     
}
 