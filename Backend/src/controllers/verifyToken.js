const jwt=require('jsonwebtoken')
function verifyToken(req, res, next){
    const token=req.headers['x-access-token'];
    if(!token){
        return res.status(400).json({
            auth:false,
            message:"We didn't find token"
        })
    }
    else{
    const decoded=jwt.verify(token, process.env.SECRET);
    req.userId=decoded.id;
    next();

}
}
export default verifyToken;

