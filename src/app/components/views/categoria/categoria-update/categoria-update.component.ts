import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria-model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria ={
    id: '',
    nome: '',
    descricao: '',
  }

  constructor(private service: CategoriaService, private router: Router, private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id = this.activateroute.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
    this.service.findById(this.categoria.id!).subscribe((resposta)=>{
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  update():void{
    this.service.update(this.categoria).subscribe((resposta) =>{
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria atualizado com sucesso!');
    }, err => {
      this.service.mensagem('validar se todos os campos estão preencgidos corretamente!');
    });
  }

  cancelar(): void{
    this.router.navigate(['categorias'])
  }

}
