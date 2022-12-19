import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse9',
    templateUrl: './cbse9.component.html',
    styleUrls: ['./cbse9.component.css']
})

export class Cbse9Component{
    title:string = "CBSE Class 9"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: 'La Famille', link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'Au Lycée', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: 'Une journée de Pauline', link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: 'Les Saisons', link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'Les Voyages', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: 'Les Loisirs et Les Sports', link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: `L'Argent de Poche`, link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: 'Faire des Achats', link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'Un Dîner en Famille', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'La Mode', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: 'Les Fêtes', link: 'Link'},
        {ind: 12, lecon: "Leçon 11", name: 'La Francophonie', link: 'Link'},
        {ind: 13, lecon: "Leçon 12", name: 'Bilan 1', link: 'Link'},
        {ind: 14, lecon: "Leçon 13", name: 'Bilan 2', link: 'Link'},
        {ind: 15, lecon: "Leçon 14", name: 'Bilan 3', link: 'Link'},
        {ind: 16, lecon: "Leçon 15", name: 'Bilan 4', link: 'Link'}
    ]
}