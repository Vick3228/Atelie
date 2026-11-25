
import express from 'express';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import Produtos from './models/Produtos.js';
import Encomendas from './models/Encomendas.js';
import Materiais from './models/Materiais.js';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// configuracoes
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

//produtos
app.post('/produtos/add', async (req, res) => {
    const {nome,descricao,precovenda,materiais} = req.body
    await Produtos.create({nome,descricao,precovenda,materiais})
    res.redirect('/produtos');
})
app.get('/produtos/add', (req, res) => {
    res.render('produto/add');
});
app.get('/produtos', async (req, res) => {
    const produtos = await Produtos.find()
    res.render("produto/lst", {produtos});
});
app.get('/produtos/upd/:id',  async(req, res) => {
  //buscar o registro que quero alterar
  const produto = await Produtos.findById(req.params.id)
    res.render("produto/upd",{produto});
});
app.get('/produtos/del/:id',  async(req, res) => {
    await Produtos.findByIdAndDelete(req.params.id)
  const produtos = await Produtos.find()
    res.render("produto/lst",{produtos});
});
app.post('/produtos/upd/:id', async (req, res) => {
  const { nome, descricao, precovenda, materiais } = req.body;
  await Produtos.findByIdAndUpdate(req.params.id, { nome, descricao, precovenda, materiais });
  const produtos = await Produtos.find();
  res.redirect('/produtos');
});

//Encomendas
app.post('/encomendas/add', async (req, res) => {
    const {cliente,produto,prazoentrega,valor,statuspedido} = req.body
    await Encomendas.create({cliente,produto,prazoentrega,valor,statuspedido})
    res.redirect('/encomendas');
})
app.get('/encomendas/add', (req, res) => {
    res.render('encomenda/add');
});
app.get('/encomendas', async (req, res) => {
    const encomendas = await Encomendas.find()
    res.render("encomenda/lst", {encomendas});
});
app.get('/encomendas/upd/:id',  async(req, res) => {
  //buscar o registro que quero alterar
  const encomenda = await Encomendas.findById(req.params.id)
    res.render("encomenda/upd",{encomenda});
});
app.get('/encomendas/del/:id',  async(req, res) => {
    await Encomendas.findByIdAndDelete(req.params.id)
  const encomendas = await Encomendas.find()
    res.render("encomenda/lst",{encomendas});
});
app.post('/encomendas/upd/:id', async (req, res) => {
  const { cliente, produto, prazoentrega, valor, statuspedido } = req.body;
  await Encomendas.findByIdAndUpdate(req.params.id, { cliente, produto, prazoentrega, valor, statuspedido });
  const encomendas = await Encomendas.find();
  res.redirect('/encomendas');
});

//Materiais
app.post('/materiais/add', async (req, res) => {
    const {material,categoria,estoque,disponibilidade,situacao} = req.body
    await Materiais.create({material,categoria,estoque,disponibilidade,situacao})
    res.redirect('/materiais');
})
app.get('/materiais/add', (req, res) => {
    res.render('materiais/add');
});
app.get('/materiais', async (req, res) => {
    const materiais = await Materiais.find()
    res.render("materiais/lst", {materiais});
});
app.get('/materiais/upd/:id',  async(req, res) => {
  //buscar o registro que quero alterar
  const materiais = await Materiais.findById(req.params.id)
    res.render("materiais/upd",{materiais});
});
app.get('/materiais/del/:id',  async(req, res) => {
    await Materiais.findByIdAndDelete(req.params.id)
  const materiais = await Materiais.find()
    res.render("materiais/lst",{materiais});
});
app.post('/materiais/upd/:id', async (req, res) => {
  const { material, categoria, estoque, disponibilidade, situacao } = req.body;
  await Materiais.findByIdAndUpdate(req.params.id, { material, categoria, estoque, disponibilidade, situacao });
  const materiais = await Materiais.find();
  res.redirect('/materiais');
});

app.get('/calculadora', (req, res) => {
    res.render('calculadora');
});

app.post('/produto/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const produtos = await Produtos.find({
    nome: new RegExp(pesquisar, 'i')
  });
  res.render("produto/lst", { produtos });
})

app.post('/encomendas/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const encomendas = await Encomendas.find({
    cliente: new RegExp(pesquisar, 'i')
  });
  res.render("encomenda/lst", { encomendas });
});

app.post('/materiais/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const materiais = await Materiais.find({
    material: new RegExp(pesquisar, 'i')
  });
  res.render("materiais/lst", { materiais });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});