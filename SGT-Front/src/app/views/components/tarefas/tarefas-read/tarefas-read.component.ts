import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas-read',
  templateUrl: './tarefas-read.component.html',
  styleUrls: ['./tarefas-read.component.css']
})
export class TarefasReadComponent implements AfterViewInit {
  tarefas: Tarefa[] = [];
  
  displayedColumns: string[] = ['id','dataInicio','terminoPrevisto',];
    dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    // constructor(private service: ResponsavelService, private router: Router){}
    constructor(private service: TarefaService, private router: Router){}
  
    ngAfterViewInit() {
      this.findAll();
    }
  
  findAll():void {
    this.service.findAll().subscribe((resposta)=>{
        this.tarefas = resposta;
        this.dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
        this.dataSource.paginator = this.paginator;
    })
  
  }
}
