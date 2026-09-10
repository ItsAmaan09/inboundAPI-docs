import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-search">
        <input type="text" placeholder="Search sections...">
      </div>
      <ul class="nav-list" id="navList">
        <li><a class="nav-link active" href="#section-1"><span><span class="num">01</span>Validate TPlus Account</span></a></li>
        <li><a class="nav-link" href="#section-2"><span><span class="num">02</span>Deposit Transaction</span></a></li>
        <li><a class="nav-link" href="#section-3"><span><span class="num">03</span>Cancel Transaction</span></a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      position: fixed; top: 56px; left: 0; bottom: 0; width: var(--sidebar-w);
      background: var(--sidebar); overflow-y: auto; z-index: 40;
      padding: 18px 0 40px;
      border-right: 1px solid rgba(255,255,255,0.08);
    }
    .sidebar::-webkit-scrollbar { width: 8px; }
    .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
    .sidebar-search { padding: 0 16px 14px; }
    .sidebar-search input {
      width: 100%; padding: 8px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.08); color: #fff; font-size: 13px; outline: none;
    }
    .nav-list { list-style: none; margin: 0; padding: 0; }
    .nav-link {
      display: flex; align-items: center; justify-content: space-between;
      padding: 9px 16px; color: var(--sidebar-text); text-decoration: none;
      font-size: 13.5px; font-weight: 500; border-left: 3px solid transparent;
      cursor: pointer;
    }
    .nav-link .num { opacity: .55; margin-right: 8px; font-variant-numeric: tabular-nums; }
    .nav-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
    .nav-link.active { color: var(--sidebar-active); border-left-color: var(--sidebar-active); background: rgba(74,222,128,0.08); font-weight: 600; }
    @media (max-width: 768px) {
      .sidebar { left: -260px; transition: left .25s ease; box-shadow: 2px 0 12px rgba(0,0,0,.25); }
      .sidebar.open { left: 0; }
    }
  `]
})
export class SidebarComponent {}
