import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse5',
    templateUrl: './cbse5.component.html',
    styleUrls: ['./cbse5.component.css']
})

export class Cbse5Component{
    title:string = "CBSE Class 5"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: 'Vous connaissez la France?', link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'Les salutations', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: 'Comptons ensemble', link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: 'Les copains', link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'Devinez', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: 'Dans la classe', link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: 'Les amis de Caroline', link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: 'Quel jour sommes-nous?', link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'La famille de Manuel', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'Les vacances', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: 'Le drapeau de mon pays', link: 'Link'}
    ]
}