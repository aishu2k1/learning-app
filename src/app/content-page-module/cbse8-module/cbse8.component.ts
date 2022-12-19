import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'cbse8',
    templateUrl: './cbse8.component.html',
    styleUrls: ['./cbse8.component.css']
})

export class Cbse8Component{
    title:string = "CBSE Class 8"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Leçon 0", name: 'Que savez-vous de la France?', link: 'Link'},
        {ind: 2, lecon: "Leçon 1", name: 'Une boum', link: 'Link'},
        {ind: 3, lecon: "Leçon 2", name: `Jeanne d'Arc`, link: 'Link'},
        {ind: 4, lecon: "Leçon 3", name: `La vie d'un mannequin est-elle facile?`, link: 'Link'},
        {ind: 5, lecon: "Leçon 4", name: 'On voyage', link: 'Link'},
        {ind: 6, lecon: "Leçon 5", name: 'Bon voyage!', link: 'Link'},
        {ind: 7, lecon: "Leçon 6", name: 'Des nouvelles de Lyon', link: 'Link'},
        {ind: 8, lecon: "Leçon 7", name: 'Bon Appétit', link: 'Link'},
        {ind: 9, lecon: "Leçon 8", name: 'Des invitations', link: 'Link'},
        {ind: 10, lecon: "Leçon 9", name: 'Aneesh partira bientôt', link: 'Link'},
        {ind: 11, lecon: "Leçon 10", name: 'La Météo', link: 'Link'}
    ]
}