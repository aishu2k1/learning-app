import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'icse6',
    templateUrl: './icse6.component.html',
    styleUrls: ['./icse6.component.css']
})

export class Icse6Component{
    title:string = "ICSE Class 6"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Unité 1", name: 'En ville', link: 'Link'},
        {ind: 2, lecon: "Unité 2", name: 'On fait des projets', link: 'Link'},
        {ind: 3, lecon: "Unité 3", name: 'De jour on jour', link: 'Link'},
        {ind: 4, lecon: "Unité 4", name: 'En famille', link: 'Link'},
        {ind: 5, lecon: "Unité 5", name: 'Bon appétit!', link: 'Link'},
        {ind: 6, lecon: "Unité 6", name: 'En voyage', link: 'Link'},
        {ind: 7, lecon: "Unité 7", name: 'Ça va', link: 'Link'},
        {ind: 8, lecon: "Unité 8", name: `On va s'amuser`, link: 'Link'}
    ]
}