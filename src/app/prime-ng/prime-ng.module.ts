import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {RatingModule} from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselService } from '../services/pages/carousel.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../services/pages/products/products.service';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { SplitterModule } from "primeng/splitter";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  exports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    ToastModule,
    InputTextModule,
    BrowserAnimationsModule,
    FormsModule,
    RippleModule,
    CarouselModule,
    ImageModule,
    RatingModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
    SplitterModule,
    ConfirmDialogModule,
    ToolbarModule,
    DialogModule,
    TableModule,
    FileUploadModule
  ],
  providers: [CarouselService,ProductService,MessageService,ConfirmationService]
})
export class PrimeNgModule { }
