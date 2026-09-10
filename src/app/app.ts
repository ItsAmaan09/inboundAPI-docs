import { Component } from '@angular/core';
import { HeaderComponent } from './components/header';
import { SidebarComponent } from './components/sidebar';
import { ValidateTPlusAccountComponent } from './pages/validate-account';
import { DepositTransactionComponent } from './pages/deposit-transaction';
import { CancelTransactionComponent } from './pages/cancel-transaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ValidateTPlusAccountComponent, DepositTransactionComponent, CancelTransactionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'InBound API Docs';
}
