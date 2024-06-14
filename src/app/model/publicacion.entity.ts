import { Trabajo } from './trabajo.entity';
import { PublicacionImagenes } from './imagenes-publicacion.entity';
import { BaseEntity } from './base.entity';
import { Aplicacion } from './aplicacion.entity';

export class Publicacion extends BaseEntity {

  titulo!: string;

  contenido!: string;

  fechaCreacion!: Date;

  trabajo!: Trabajo;

  fechaFin!: Date;

  imagenes!: PublicacionImagenes[];

  aplicaciones!: Aplicacion[];
}
