import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  
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


}
