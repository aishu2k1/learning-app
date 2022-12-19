import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse7',
    templateUrl: './cbse7.component.html',
    styleUrls: ['./cbse7.component.css']
})

export class Cbse7Component{
    title:string = "CBSE Class 7"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: `La France, qu'est-ce que c'est?`, link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'La rentrée', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: 'Il est français', link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: 'La journée de Mme Lavigne', link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'Kalu est malade', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: 'Faire les courses', link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: 'M. Lavigne cherche un manteau', link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: 'Allons à Paris', link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'Les photos de Manuel', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'Au café des Laurent', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: 'Encore une lettre de Rouen', link: 'Link'},
        {ind: 12, lecon: "Leçon 11", name: 'Une journée bien chargée', link: 'Link'},
        {ind: 13, lecon: "Leçon 12", name: `Une visite au parc d'attractions`, link: 'Link'}
    ]
}