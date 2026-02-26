import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Institucional } from './institucional/institucional';
import { Afiliados } from './afiliados/afiliados';
import { Consejerias } from './consejerias/consejerias';
import { Solicitudes } from './solicitudes/solicitudes';
import { Noticias } from './noticias/noticias';
import { Multimedia } from './multimedia/multimedia';
import { Contacto } from './contacto/contacto';
import { Glosario } from './glosario/glosario';

export const routes: Routes = [

    {
    path:'',
    component: Home
  },
  {
    path:'institucional',
    component: Institucional
  },
  {
    path:'afiliados',
    component: Afiliados
  },
  {
    path:'consejerias',
    component: Consejerias
  },
  {
    path:'solicitudes',
    component: Solicitudes
  },
  {
    path:'noticias',
    component: Noticias
  },
  {
    path:'multimedia',
    component: Multimedia
  },
  {
    path:'contacto',
    component: Contacto
  },
  {
    path:'glosario',
    component: Glosario
  }
];
