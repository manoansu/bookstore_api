import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-updaate',
  templateUrl: './livro-updaate.component.html',
  styleUrls: ['./livro-updaate.component.css']
})
export class LivroUpdaateComponent implements OnInit {

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
    this.livro.id = this.activateroute.snapshot.paramMap.get('id')! // pega o id de vindo de URL..
    this.findById();
  }

  update():void{
    this.service.update(this.livro).subscribe((resposta) =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Livro atualizado com sucesso!');
    }, err =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Falha ao atualizar o livro! Tente mais tarde!');
  })
  }

  findById():void{
    this.service.findById(this.livro.id!).subscribe((resposta) =>{
      this.livro = resposta
    })
  }

  cancelar():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
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

}