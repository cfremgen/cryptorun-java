import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    template: `<h1 mat-dialog-title>{{title}}</h1>
                <div mat-dialog-content [innerHTML]="message"></div>
                <div mat-dialog-actions [style.justify-content]="'flex-end'">
                    <button mat-button mat-dialog-close="{{confirmText}}" [style.color]="'#2196F3'">{{confirmText}}</button>
                </div>`,
    styles: [".mat-dialog-actions{ margin: 10px -10px 0 0; padding-bottom: 0;}"]
})
export class AlertDialog {
    public title: string;
    public message: string;
    public confirmText: string = "Ok";
    constructor(public dialogRef: MatDialogRef<AlertDialog>) { }
} 