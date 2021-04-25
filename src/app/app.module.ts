import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { UploadFilesComponent } from "./components/upload-files/upload-files.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, UploadFilesComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule],
})
export class AppModule {}
