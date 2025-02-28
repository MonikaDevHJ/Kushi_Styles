import "dotenv/config";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Use environment variable


// Signup route
app.post("/signup", async (req, res) => {
  try {

    const {name,email,password} = req.body

    const existingUser = await prisma.user.findUnique({
      where: {email}
    })

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
      data:{
        name: name,
        email: email,
        password: hashedPassword
      }
    })

    res.status(200).json({message:"User Created Successfully"})
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error });

  }
});

// Login route
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
    }

    const userPassword = user?.password ? user.password : "" 

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const userId = user?.id ? user.id : ""
    const token = jwt.sign({ userId: userId }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
