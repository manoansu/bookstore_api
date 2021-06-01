import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroUpdaateComponent } from './components/views/livro/livro-updaate/livro-updaate.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'categorias', // path para listar categorias passando na URL..
  component: CategoriaReadComponent
},
{
  path: 'categorias/create', // path para create categorias na URL..
  component: CategoriaCreateComponent
},
{
  path: 'categorias/delete/:id', // path para deletar categorias passando o id na URL..
  component: CategoriaDeleteComponent
},
{
  path: 'categorias/update/:id',// path para update categorias passando o id na URL usando a rota (endpoint)..
  component: CategoriaUpdateComponent
},
{
  path: 'categorias/:id_cat/livros',
  component: LivroReadAllComponent
},
{
  path:'categorias/:id_cat/livros/create',
  component:LivroCreateComponent
},
{
  path: 'categorias/:id_cat/livros/:id/update',
  component:LivroUpdaateComponent
},
{
  path: 'categorias/:id_cat/livros/:id/delete',
  component:LivroDeleteComponent
},
{
  path: 'categorias/:id_cat/livros/:id/read',
  component:LivroReadComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
