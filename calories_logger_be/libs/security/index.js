const jwt = require('jsonwebtoken');
const expiresIn = parseInt(process.env.JWT_AGE_SECONDS);
const expiresInReset = parseInt(process.env.JWT_AGE_SECONDS_RESET);
module.exports = { 
  jwtSign : async (payload)=>jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn}
  ),

  jwtSingReset: async (payload) => jwt.sign(
    payload,
    process.env.JWT_SECRET_RESET,
    {expiresIn: expiresInReset}
  ),
  jwtVerify: async (token)=>jwt.verify(token, process.env.JWT_SECRET),

  jwtVerifyRecovery: async (token) => jwt.verify(token, process.env.JWT_SECRET_RESET, function(error, data){
    if(error)
    {
        return false;
    }
    return true;
})
}