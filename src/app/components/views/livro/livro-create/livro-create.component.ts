import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  titulo = new FormControl("", [Validators.minLength(3)]); //Tratamento de erro de campo titulo na tela..
  autor = new FormControl("", [Validators.minLength(3)]); //Tratamento de erro de campo autor na tela..
  testo = new FormControl("", [Validators.minLength(10)]); //Tratamento de erro de campo texto na tela..
  
  id_cat: String = ''

  livro: Livro ={
    id: '',
    titulo: '',
    autor: '',
    testo: ''
  }

  constructor(
    private service:LivroService,
    private router: Router, 
    private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.activateroute.snapshot.paramMap.get('id_cat')! // pega o id de vindo de URL..
  }

  getMessage(){
    if(this.titulo.invalid){
      return "O campo TITULO deve conter entre 3 e 100 caracteres";
    }
    if(this.autor.invalid){
      return "O campo NOME DE AUTOR deve conter entre 3 e 100 caracteres";
    }
    if(this.testo.invalid){
      return "O campo TEXTO deve conter entre 10 e 2.000.000 caracteres";
    }
    return false;
  }

  create():void{
    this.service.create(this.livro,this.id_cat).subscribe((resposta) =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Livro criado com sucesso!');
    }, err =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Erro ao criar novo livro! Tente mais tarde!');
  })
  }
  cancelar():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

}
