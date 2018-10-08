
const jwt=require('jsonwebtoken');
//===========
//Verificar token
//===========

let verificaToken = (req,res,next)=>{
        
        let token = req.get('token');

        jwt.verify(token,process.env.SEED,(err,decoded)=>{
           // console.log(token);
            if(err){
                return res.status(401).json({
                    ok:false,
                    err: {
                        message:'token vlv'
                    }
                    
                });
            }
            req.usuario=decoded.usuario;
            next();

        });

}

//===========
//Verifica admin role
//===========
let verificaAdminRole =(req,res,next) =>{
    let usuario = req.usuario;
    

    if ( usuario.role === 'ADMIN_ROLE'){
        next();
    }
    else {
        return res.json({
            ok:false,
            err: {
                message:'no eres administrador '
            }
            
        });
    }
}

module.exports = {
    verificaToken,
    verificaAdminRole
}