import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria-model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias']) //router tem metodo navigate que redireciona para a pagina desejado sempre add no constructor
      this.service.mensagem('Categoria cridado com sucesso!');//apenas chama o metodo mensagem que é criado no ficheiro service com msg de sucesso.
      console.log(resposta)
    }, err=> { //variavel que nos ajuda tratar o erro na tela
      //percorre o tamanho de vetor errors vindo da tela onde:
       //err é a variavel declarado,
       //error é oerro que aparece no console de inspect element de navegador.
       //errors é o vetor que tem os 4 campos(id, nome, descrição, lista de livros), 
       //mas o tratamento é so para campo nome e descrição
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message) // apenas pega o erro no campo nome e descrição definido na tela..
      }
    })
  }

  cancelar(): void{
    this.router.navigate(['categorias'])  // apenas direciona para listas de categorias...
  }

}
