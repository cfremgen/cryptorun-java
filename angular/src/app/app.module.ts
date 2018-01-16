// Angular Core
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third Party 
import { ToastrModule } from 'ngx-toastr';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// Application
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GlobalErrorHandler } from './shared/services/error-handler.service';

// Shared Services
import { HttpService } from './shared/services/http.service';

// Route
import { Routing } from './shared/routing';

// Dialogs
import { AlertDialog } from './shared/dialogs/alert.component';
import { ConfirmDialog } from './shared/dialogs/confirm.component';
import { SimpleInputDialog } from './shared/dialogs/simple-input.component';

// Pipes
import { DateFormatLocaleNoSeconds, DateStringTimeAgoPipe, SubstringPipe } from './shared/pipes/strings.pipe';
import { NumberFormatLocalePipe, RoundToDecimalPlacePipe } from './shared/pipes/numbers.pipe';

// Components
import { PricesComponent } from './prices/prices.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

let materialModules = [
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule
];

@NgModule({
  declarations: [
    // Application
    AppComponent, NavComponent,

    // Dialogs
    AlertDialog, ConfirmDialog, SimpleInputDialog,

    // Pipes
    DateFormatLocaleNoSeconds, DateStringTimeAgoPipe, NumberFormatLocalePipe, RoundToDecimalPlacePipe, SubstringPipe,

    // Components
    PricesComponent
  ],
  entryComponents: [
    AlertDialog, ConfirmDialog
  ],
  imports: [
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...materialModules,
    ReactiveFormsModule,
    Routing,
    ToastrModule.forRoot({ progressBar: false, closeButton: true, timeOut: 3000, newestOnTop: false, messageClass: 'toast-message' })
  ],
  providers: [
    GlobalErrorHandler,
    HttpService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
