import conexao from "../config/conexao.js";
const MateriaisSchema = new conexao.Schema({
  material: { type: String,required: true},
  categoria: {type: String,required: true},
  estoque:{type:String , required:true},
  disponibilidade:{type:String, required:false},
  situacao:{type:String, required:false}
});
const Materiais = 
conexao.model("Materiais", MateriaisSchema);
export default Materiais;