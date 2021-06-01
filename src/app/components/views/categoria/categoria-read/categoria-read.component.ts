import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria-model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = [] // cria a lista de categorias..

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  constructor(private service: CategoriaService,private router: Router) { } // no construtor cria o serviço de CategoriaService

  ngOnInit(): void {
    this.findAll(); // sempre qua abre a pagina vai chamar a lista de categoria..
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.categorias = resposta;
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }
}
