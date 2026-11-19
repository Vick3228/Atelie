import conexao from "../config/conexao.js";
const CalculadoraSchema = new conexao.Schema({
  cadastromaterial: { type: String,required: true},
  tempopro: {type: Number,required: true},
  despesasa:{type:Number, required:true},
  customaterial:{type:Number, required:true},
  valorhora:{type:Number, required:true},
  margem:{type:Number, required:true}
});
const Calculadora = 
conexao.model("Calculadora", CalculadoraSchema);
export default Calculadora;