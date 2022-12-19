import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse6',
    templateUrl: './cbse6.component.html',
    styleUrls: ['./cbse6.component.css']
})

export class Cbse6Component{
    title:string = "CBSE Class 6"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: `Un coup d'œil sur la France`, link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'Voilà le frère et la sœur de Manuel', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: 'À la cafétéria', link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: 'Mon Pays : la France', link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'Les Parents de Manuel', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: `C'est Noël`, link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: `Allons à l'école`, link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: 'Dans un grand magasin', link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'Les repas', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'Ma maison', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: 'Une lettre de Rouen', link: 'Link'}
    ]
}