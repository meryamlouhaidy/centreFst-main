/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {EtudiantService} from '../../../Controller/Service/etudiant.service';
import {Centre} from '../../../Controller/Model/centre.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  constructor(private etudiantService: EtudiantService  ) { }

  public delete(etudiants: Etudiant){
    this.etudiantService.delete(etudiants);
  }
  public save(){
    this.etudiantService.save();
  }

  public valider(){
    this.etudiantService.valider();
  }
  ngOnInit(): void {
    this.etudiantService.findAll();
  }
  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }
  get etudiantslist(): Array<Etudiant> {
    return this.etudiantService.etudiantslist;
  }
  get centre(): Centre{
    return this.etudiantService.centre;
  }
  get parcours(): Parcours{
    return this.etudiantService.parcours;
  }
}
