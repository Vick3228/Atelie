import mongoose from "mongoose";

const url = "mongodb+srv://toyavi:151170@cluster0.2i9vkgu.mongodb.net/"

const conexao = await mongoose.connect(url)

export default conexao