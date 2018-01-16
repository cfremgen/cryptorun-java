import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    template: `<h1 mat-dialog-title>{{title}}</h1>
                <div mat-dialog-content>                
                    <mat-form-field>
                        <input matInput [(ngModel)]="inputValue" [maxlength]="16" [placeholder]="inputPlaceholder">
                    </mat-form-field>
                </div>
                <div mat-dialog-actions [style.justify-content]="'flex-end'">
                    <button mat-button mat-dialog-close="cancel">Cancel</button>
                    <button mat-button mat-dialog-close="Save" [style.color]="'#2196F3'">Save</button>
                </div>`,
    styles: [".mat-dialog-actions{ margin: 10px -10px 0 0; padding-bottom: 0;}"]
})
export class SimpleInputDialog {
    public title: string;
    public inputPlaceholder: string;
    public inputValue: string;

    constructor(public dialogRef: MatDialogRef<SimpleInputDialog>) { }
} 