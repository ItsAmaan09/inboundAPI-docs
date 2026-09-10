import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="topbar">
      <div class="brand">
        <button class="hamburger" aria-label="Toggle navigation">&#9776;</button>
        <span class="brand-name">{{ title }}</span>
        <span class="brand-sub">{{ subtitle }}</span>
      </div>
      <div class="meta">
        <span class="version-badge">{{ version }}</span>
        <span>Last Updated: {{ lastUpdated }}</span>
      </div>
    </div>
  `,
  styles: [`
    .topbar {
      position: fixed; top: 0; left: 0; right: 0; height: 56px;
      background: var(--sidebar); color: #fff; z-index: 50;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .brand { display: flex; align-items: baseline; gap: 10px; }
    .brand-name { font-weight: 700; font-size: 17px; letter-spacing: .2px; }
    .brand-sub { font-size: 12.5px; color: rgba(255,255,255,.75); }
    .meta { display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: rgba(255,255,255,.8); }
    .version-badge {
      background: rgba(74,222,128,0.18); color: var(--sidebar-active);
      border: 1px solid rgba(74,222,128,0.4);
      padding: 2px 9px; border-radius: 20px; font-weight: 600; font-size: 12px;
    }
    .hamburger {
      display: none; background: none; border: none; color: #fff; font-size: 22px; cursor: pointer;
      padding: 4px 8px;
    }
    @media (max-width: 768px) {
      .hamburger { display: block; }
    }
  `]
})
export class HeaderComponent {
  @Input() title = 'InBound API';
  @Input() subtitle = 'Integration Reference';
  @Input() version = 'v5';
  lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
