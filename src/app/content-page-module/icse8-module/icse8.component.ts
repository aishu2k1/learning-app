import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'icse8',
    templateUrl: './icse8.component.html',
    styleUrls: ['./icse8.component.css']
})

export class Icse8Component{
    title:string = "ICSE Class 8"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Unité 1", name: 'Jeunes sans Frontières', link: 'Link'},
        {ind: 2, lecon: "Unité 2", name: 'En ville et à la campagne', link: 'Link'},
        {ind: 3, lecon: "Unité 3", name: 'Bon voyage!', link: 'Link'},
        {ind: 4, lecon: "Unité 4", name: 'Un séjour en France', link: 'Link'},
        {ind: 5, lecon: "Unité 5", name: 'Une semaine typique', link: 'Link'},
        {ind: 6, lecon: "Unité 6", name: 'Bon appétit', link: 'Link'},
        {ind: 7, lecon: "Unité 7", name: `Ça m'intéresse`, link: 'Link'},
        {ind: 8, lecon: "Unité 8", name: 'Nouveux horizons', link: 'Link'},
        {ind: 9, lecon: "Unité 9", name: `À votre santé`, link: 'Link'},
        {ind: 10, lecon: "Unité 10", name: `Projets d'avenir`, link: 'Link'}
    ]
}