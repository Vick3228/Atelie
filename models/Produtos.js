import conexao from "../config/conexao.js";
const ProdutosSchema = new conexao.Schema({
  nome: { type: String,required: true},
  descricao: {type: String,required: true},
  precovenda:{type:Number, required:true},
  materiais:{type:String, required:true}
});
const Produtos = 
conexao.model("Produtos", ProdutosSchema);
export default Produtos;