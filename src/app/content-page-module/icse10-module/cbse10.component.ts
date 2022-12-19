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
        {ind: 1, lecon: "Unité 1", name: 'Bonjour!', link: 'Link'},
        {ind: 2, lecon: "Unité 2", name: `J'habite ici`, link: 'Link'},
        {ind: 3, lecon: "Unité 3", name: 'Chez moi', link: 'Link'},
        {ind: 4, lecon: "Unité 4", name: 'Les animaux', link: 'Link'},
        {ind: 5, lecon: "Unité 5", name: `Des fêtes et des festivals`, link: 'Link'},
        {ind: 6, lecon: "Unité 6", name: `Qu'est-ce que tu fais?`, link: 'Link'},
        {ind: 7, lecon: "Unité 7", name: 'Une ville de France', link: 'Link'},
        {ind: 8, lecon: "Unité 8", name: 'Une journée scolaire', link: 'Link'},
        {ind: 9, lecon: "Unité 9", name: `Mmm-c'est bon, ça!`, link: 'Link'},
        {ind: 10, lecon: "Unité 10", name: 'Amuse-toi bien!', link: 'Link'}
    ]
}