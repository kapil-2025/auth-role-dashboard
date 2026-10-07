import User from "../models/User.js";
import mongoose from "mongoose";
export const getAllUsers=async (req,res)=>{
  try{
const users=await User.find().select("-password");
res.json(users);
  }
  catch(error){
    console.error(error.message);
    res.status(500).json({message:"Server error"})
  }
}
export const deleteUser=async (req,res)=>{ 
  try{
  const {id}=req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(400).json({ message: "Invalid user id" });
}
if (id === req.user._id.toString()) {
  return res.status(400).json({ message: "You cannot delete your own account" });
}
  const user=await User.findById(id);
  if(!user){
    return res.status(404).json({message:"User not found"});
  }
  await user.deleteOne();
  res.json({message:"User removed"})}
   catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
}