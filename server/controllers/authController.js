import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const generateToken=(id,role)=>{return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:"7d"});

}
export const registerUser=async (req,res)=>{try{
const {name,email,password}=req.body;
if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string"){
  return res.status(400).json({message:"Name, email and password must be text"});
}
const cleanEmail=email.trim().toLowerCase();
if(!name || !name.trim() || !cleanEmail || !password){
  return res.status(400).json({message:"Name, email and password are required"});
}
if(password.length<6){
  return res.status(400).json({message:"password must be more than 6 letters"})
}
const userExists= await User.findOne({email:cleanEmail});
if(userExists){
  return res.status(400).json({message:"User already exists"});}
  const salt=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(password,salt);
  const user= await User.create({name:name,email:cleanEmail,password:hashedPassword});
  res.status(201).json({_id:user._id,name:user.name,email:user.email,role:user.role,});
 
}catch(error){
  console.error(error.message);
  res.status(500).json({message:"Server errror"});
}
};


export const loginUser=async(req,res)=>{try{
const {email,password}=req.body;
if(typeof email !== "string" || typeof password !== "string"){
  return res.status(400).json({message:"Email and password must be text"});
}
const cleanEmail = email.trim().toLowerCase();
if(!cleanEmail || !password){
  return res.status(400).json({message:"Email and password are required"});
}
const user=await User.findOne({email:cleanEmail});
if(!user){
  return res.status(401).json({message:"invalid email or password"});}
  const isMatch= await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.status(401).json({message:"invalid email or password"});
  }
  res.status(200).json({_id:user._id,name:user.name,email:user.email,role:user.role,token:generateToken(user._id,user.role)});}
  catch(error){
    console.error(error.message);
    return res.status(500).json({message:"Server error"})
  }
}

