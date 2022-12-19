import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse10',
    templateUrl: './cbse10.component.html',
    styleUrls: ['./cbse10.component.css']
})

export class Cbse10Component{
    title:string = "CBSE Class 10"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: 'Retrouvons nos amis', link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'Après le bac', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: 'Chercher du travail', link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: 'Le plaisir de lire', link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'Les médias', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: 'Chacun ses goûts', link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: 'En pleine forme', link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: `L'environnement`, link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'Métro-Boulot Dodo', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'Vive la République', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: `C'est bon le progrès`, link: 'Link'},
        {ind: 12, lecon: "Leçon 11", name: 'Vers un monde interculturel', link: 'Link'},
        {ind: 13, lecon: "Leçon 12", name: 'Bilan 1', link: 'Link'},
        {ind: 14, lecon: "Leçon 13", name: 'Bilan 2', link: 'Link'},
        {ind: 15, lecon: "Leçon 14", name: 'Bilan 3', link: 'Link'},
        {ind: 16, lecon: "Leçon 15", name: 'Bilan 4', link: 'Link'}
    ]
}