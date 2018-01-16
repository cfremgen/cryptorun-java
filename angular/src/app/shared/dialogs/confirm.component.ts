import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    template: `<h1 mat-dialog-title>{{title}}</h1>
                <div mat-dialog-content>{{message}}</div>
                <div mat-dialog-actions [style.justify-content]="'flex-end'">
                    <button mat-button mat-dialog-close="{{optionLeft}}">{{optionLeft}}</button>
                    <button mat-button mat-dialog-close="{{optionRight}}" [style.color]="'#2196F3'">{{optionRight}}</button>
                </div>`,
    styles: [".mat-dialog-actions{ margin: 10px -10px 0 0; padding-bottom: 0;}"]
})
export class ConfirmDialog {
    public title: string;
    public message: string;
    public optionLeft: string = "Cancel";
    public optionRight: string = "Yes";
    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) { }
} 