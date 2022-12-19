import { Component } from "@angular/core";

export interface tableRows {
    ind: number,
    lecon: string,
    name: string,
    link: string
}

@Component({
    selector: 'icse7',
    templateUrl: './icse7.component.html',
    styleUrls: ['./icse7.component.css']
})

export class Icse7Component{
    title:string = "ICSE Class 7"
    displayedColumns: string[] = ['ind', 'lecon', 'name', 'link'];
    dataSource:tableRows[] = [
        {ind: 1, lecon: "Unité 1", name: 'Des jeunes francophones', link: 'Link'},
        {ind: 2, lecon: "Unité 2", name: `Bienvenue à Paris`, link: 'Link'},
        {ind: 3, lecon: "Unité 3", name: 'Ça me passione', link: 'Link'},
        {ind: 4, lecon: "Unité 4", name: 'Au travail!', link: 'Link'},
        {ind: 5, lecon: "Unité 5", name: 'Une visite à Planète Futuroscope', link: 'Link'},
        {ind: 6, lecon: "Unité 6", name: 'En forme', link: 'Link'},
        {ind: 7, lecon: "Unité 7", name: 'Vive les vacances!', link: 'Link'},
        {ind: 8, lecon: "Unité 8", name: 'Notre monde', link: 'Link'}
    ]
}