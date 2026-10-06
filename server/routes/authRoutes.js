import express from "express";
import { registerUser,loginUser } from "../controllers/authController.js";
import { protect ,adminOnly } from "../middleware/authMiddleware.js";
import {getAllUsers, deleteUser} from "../controllers/adminController.js"
const router=express.Router();
router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/profile",protect,(req,res)=>{
  res.json(req.user);
});
router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome admin" });
});
router.get("/users",protect,adminOnly,getAllUsers);
router.delete("/users/:id",protect,adminOnly,deleteUser);
export default router;
