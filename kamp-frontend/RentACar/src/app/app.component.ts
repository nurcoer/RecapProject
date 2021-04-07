import { Component } from '@angular/core';
//Component HTML Datasını  yönettiğimiz yer
@Component({
  selector: 'app-root', //tag name
  templateUrl: './app.component.html', //ilgili HTML dosyası
  styleUrls: ['./app.component.css'], //HTML 'in style dosyası
})
export class AppComponent {
  title: string = 'RentACar'; //type save ts yazılımı
  user: string = "kadriyenurcöer";
}
