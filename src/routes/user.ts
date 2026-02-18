import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

router.get("/hey",(req,res)=>{
    res.json({message:"hey from harsh"})


})

router.get("/hello",(req,res)=>{
    res.json({message:"hello from harsh"})


})
export default router;