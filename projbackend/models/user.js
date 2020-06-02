const mongoose =  require('mongoose')
const crypto =  require('crypto')
const { v4: uuidv4 } = require('uuid');
const userSchema =new  mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim :true //for removing the extra spaces trim is used
    },
    lastname:{
        type:String,
        maxlength : 32,
        trim  : true
    },
    email: {
        type: String,
        trim : true,
        required:true,
        unique: true//for unique email  //property by mongoDB

    },
    userinfo:{
        type:String,
        trim: true
    },
    // password
    encry_password:{
        type: String,
        required:true
    },
    salt : String,
    role:{ //for the role
        type:Number,
        default:0
    },
    purchases:{  
        type: Array,
        default:[] //by default no  order
    }

},{timestamps:true}) 

//virtual are for the setters and getters
//using here virtual  we defined the new field in mongoose

userSchema.virtual("password")
  .set(function(password)
  {
        this._password = password //_ for private variable
        this.salt  = uuidv4()
        this.encry_password = this.securePassword(password)
  })
  .get(function()
  {
      return this._password;
  })

//method are basically operations on schema
userSchema.methods = {
    authenticate : function(plainpassword)
    {
        return this.securePassword(plainpassword) === this.encry_password //return true and false
    },
    securePassword: function(plainpassword)
    {
        //here we have used the virtual  field password
        if(!plainpassword) return ""
        try{
            return crypto.createHmac('sha256', this.salt) //sha256 is used for cryptography
                   .update(plainpassword)
                   .digest('hex');
        }
        catch(err)
        {
            return ""
        }
    }
} 

module.exports = mongoose.model('User',userSchema)