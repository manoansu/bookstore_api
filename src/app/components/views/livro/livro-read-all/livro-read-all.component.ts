import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  id_cat: String = ""; // cria um id do tipo string que é definido no ficheiro livro.model.ts

  livros: Livro[] = []; // cria uma lista de livro vazio..

  constructor(
    private service: LivroService,
    private activateRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id_cat = this.activateRouter.snapshot.paramMap.get('id_cat')! // apenas captura o id vindo de Url..
    this.findAll()
  }

  findAll(){
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta)=>{
      this.livros =resposta
      console.log(this.livros)
    })
  }

  navegarParaCriarLivro():void{
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])// endpoint/ path no navegador para criação do nosso categoria de livro
  }

}
