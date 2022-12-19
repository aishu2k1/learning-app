import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'icse9',
    templateUrl: './icse9.component.html',
    styleUrls: ['./icse9.component.css']
})

export class Icse9Component{
    title:string = "ICSE Class 9"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Unité 1", name: 'La Famille', link: 'Link'},
        {ind: 2, lecon: "Unité 2", name: 'Au Lycée', link: 'Link'},
        {ind: 3, lecon: "Unité 3", name: 'Une journée de Pauline', link: 'Link'},
        {ind: 4, lecon: "Unité 4", name: 'Les Saisons', link: 'Link'},
        {ind: 5, lecon: "Unité 5", name: 'Les Voyages', link: 'Link'},
        {ind: 6, lecon: "Unité 6", name: 'Les Loisirs et Les Sports', link: 'Link'},
        {ind: 7, lecon: "Unité 7", name: `L'Argent de Poche`, link: 'Link'},
        {ind: 8, lecon: "Unité 8", name: 'Faire des Achats', link: 'Link'},
        {ind: 9, lecon: "Unité 9", name: 'Un Dîner en Famille', link: 'Link'},
        {ind: 10, lecon: "Unité 10", name: 'La Mode', link: 'Link'},
        {ind: 11, lecon: "Unité 11", name: 'Les Fêtes', link: 'Link'},
        {ind: 12, lecon: "Unité 12", name: 'La Francophonie', link: 'Link'},
        {ind: 13, lecon: "Unité 13", name: 'Bilan 1', link: 'Link'},
        {ind: 14, lecon: "Unité 14", name: 'Bilan 2', link: 'Link'},
        {ind: 15, lecon: "Unité 15", name: 'Bilan 3', link: 'Link'},
        {ind: 16, lecon: "Unité 16", name: 'Bilan 4', link: 'Link'}
    ]
}