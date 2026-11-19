import conexao from "../config/conexao.js";
const EncomendasSchema = new conexao.Schema({
  cliente: { type: String,required: true},
  produto:{type:String, required:true},
  prazoentrega: {type: String ,required: true},
  valor:{type:Number, required:true},
  statuspedido:{type:String, required:true}
});
const Encomendas = 
conexao.model("Encomendas", EncomendasSchema);
export default Encomendas;