import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

 
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

  delete():void{
    this.service.delete(this.livro.id!).subscribe((resposta) =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Livro removido com sucesso!');
    }, err =>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Falha ao remover o livro! Tente mais tarde..');
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
  
}