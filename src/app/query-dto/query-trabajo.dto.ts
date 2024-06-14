export class QueryTrabajoDTO {

  titulo?: string;

  tituloOperator?: string;

  estado?: string;

  estadoOperator?: string;

  fechaInicio?: Date;

  fechaInicioOperator?: string;

  fechaFin?: Date;

  fechaFinOperator?: string;

  salario?: number;

  salarioOperator?: string;

  salarioPorHora?: boolean;

  salarioPorHoraOperator?: string;

  autor?: string;

  autorOperator?: string;
}
