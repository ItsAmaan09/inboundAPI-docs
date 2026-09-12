import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-search">
        <input type="text" placeholder="Search sections..." />
      </div>
      <ul class="nav-list" id="navList">
        <li>
          <a class="nav-link" [class.active]="activeSection === 'section-1'" href="#section-1"
            ><span><span class="num">01</span>Validate TPlus Account</span></a
          >
        </li>
        <li>
          <a class="nav-link" [class.active]="activeSection === 'section-2'" href="#section-2"
            ><span><span class="num">02</span>Deposit Transaction</span></a
          >
        </li>
        <li>
          <a class="nav-link" [class.active]="activeSection === 'section-3'" href="#section-3"
            ><span><span class="num">03</span>Cancel Transaction</span></a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .sidebar {
        position: fixed;
        top: 56px;
        left: 0;
        bottom: 0;
        width: var(--sidebar-w);
        background: var(--sidebar);
        overflow-y: auto;
        z-index: 40;
        padding: 18px 0 40px;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
      }
      .sidebar::-webkit-scrollbar {
        width: 8px;
      }
      .sidebar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 4px;
      }
      .sidebar-search {
        padding: 0 16px 14px;
      }
      .sidebar-search input {
        width: 100%;
        padding: 8px 10px;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        font-size: 13px;
        outline: none;
      }
      .nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .nav-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 16px;
        color: var(--sidebar-text);
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        border-left: 3px solid transparent;
        cursor: pointer;
      }
      .nav-link .num {
        opacity: 0.55;
        margin-right: 8px;
        font-variant-numeric: tabular-nums;
      }
      .nav-link:hover {
        background: rgba(255, 255, 255, 0.06);
        color: #fff;
      }
      .nav-link.active {
        color: var(--sidebar-active);
        border-left-color: var(--sidebar-active);
        background: rgba(74, 222, 128, 0.08);
        font-weight: 600;
      }
      @media (max-width: 768px) {
        .sidebar {
          left: -260px;
          transition: left 0.25s ease;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25);
        }
        .sidebar.open {
          left: 0;
        }
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  activeSection: string = 'section-1';
  private sections: string[] = ['section-1', 'section-2', 'section-3'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.onWindowScroll(), 100);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    let currentActive = this.activeSection;
    let best = -Infinity;

    for (const sectionId of this.sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top <= 100 && top > best) {
          best = top;
          currentActive = sectionId;
        }
      }
    }

    if (window.scrollY < 50) {
      currentActive = 'section-1';
    }

    if (this.activeSection !== currentActive) {
      this.activeSection = currentActive;
    }
  }
}
