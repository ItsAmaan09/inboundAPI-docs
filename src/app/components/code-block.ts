import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-code-block',
  standalone: true,
  template: `
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-lang">{{ lang }}</span>
        <button class="copy-btn" [class.copied]="copied()" (click)="copy()">
          {{ copied() ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <pre><code><ng-content></ng-content></code></pre>
    </div>
  `,
  styles: [
    `
      .code-block {
        position: relative;
        background: var(--code-bg);
        border-radius: 8px;
        margin: 16px 0;
        overflow: hidden;
      }
      .code-block-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 14px;
        background: rgba(255, 255, 255, 0.04);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .code-lang {
        font-size: 11.5px;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        font-weight: 600;
      }
      .copy-btn {
        background: rgba(255, 255, 255, 0.08);
        color: #cbd5e1;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 5px;
        padding: 4px 10px;
        font-size: 12px;
        cursor: pointer;
        font-family: inherit;
      }
      .copy-btn:hover {
        background: rgba(255, 255, 255, 0.16);
        color: #fff;
      }
      .copy-btn.copied {
        background: rgba(74, 222, 128, 0.2);
        color: var(--sidebar-active);
        border-color: rgba(74, 222, 128, 0.4);
      }
      .code-block pre {
        margin: 0;
        padding: 16px;
        overflow-x: auto;
        font-size: 13px;
        line-height: 1.6;
        color: var(--code-text);
      }
      .code-block code {
        font-family: 'Courier New', Courier, monospace;
      }
    `,
  ],
})
export class CodeBlockComponent {
  @Input() lang = 'JSON';
  @Input() codeToCopy = '';

  copied = signal(false);

  copy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.codeToCopy).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }
}
