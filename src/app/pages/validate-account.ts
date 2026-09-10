import { Component } from '@angular/core';
import { CodeBlockComponent } from '../components/code-block';
import { HighlightJsonPipe, HighlightCurlPipe } from '../pipes/highlight.pipe';

@Component({
  selector: 'app-validate-tplus-account',
  standalone: true,
  imports: [CodeBlockComponent, HighlightJsonPipe, HighlightCurlPipe],
  template: `
    <section id="section-1">
      <h2>Validate TPlus Account</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div class="code-block" style="margin-bottom: 24px;">
        <div class="code-block-header"><span class="code-lang">HTTP</span></div>
        <pre><code><span class="method">POST</span> <span class="path">/api/User/ValidateTPlusAccount</span></code></pre>
      </div>

      <h3>Required Headers</h3>
      <table>
        <thead><tr><th>Header</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td class="field-name">X-API-Key</td><td>&#123;your_api_key&#125; <span class="req">*</span></td></tr>
          <tr><td class="field-name">Content-Type</td><td>application/json <span class="req">*</span></td></tr>
        </tbody>
      </table>

      <h3>Request Body</h3>
      <table>
        <thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td class="field-name">userName<span class="req">*</span></td><td><span class="type-badge">string</span></td><td>Required</td><td>Lorem ipsum dolor sit amet.</td></tr>
          <tr><td class="field-name">password<span class="req">*</span></td><td><span class="type-badge">string</span></td><td>Required</td><td>Lorem ipsum dolor sit amet.</td></tr>
          <tr><td class="field-name">account</td><td><span class="type-badge">string</span></td><td>Optional</td><td>Lorem ipsum dolor sit amet.</td></tr>
          <tr><td class="field-name">Mop</td><td><span class="type-badge">string</span></td><td>Optional</td><td>Lorem ipsum dolor sit amet.</td></tr>
          <tr><td class="field-name">bankCode</td><td><span class="type-badge">string</span></td><td>Optional</td><td>Lorem ipsum dolor sit amet.</td></tr>
        </tbody>
      </table>

      <h4>Example Request</h4>
      <app-code-block lang="cURL" [codeToCopy]="curlRequest">
        <span [innerHTML]="curlRequest | highlightCurl"></span>
      </app-code-block>

      <h3>Response</h3>
      <app-code-block lang="JSON" [codeToCopy]="jsonResponse">
        <span [innerHTML]="jsonResponse | highlightJson"></span>
      </app-code-block>
    </section>
  `
})
export class ValidateTPlusAccountComponent {
  curlRequest = `curl --location 'https://inboundv5.sombank.so/api/User/ValidateTPlusAccount' \\
--header 'X-API-Key: yMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQyMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQ' \\
--data-raw '{
    "userName": "worldremit",
    "password": "Wr@123456",
    "account": "",
    "Mop": "Remittance",
    "bankCode": ""
}'`;

  jsonResponse = `{
    "success": true,
    "message": "User details validated successfully",
    "status": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImUxMGE5NTVhLThhZmUtNDVkYS1hYzUwLWNhNWM3NTE4OTU5YyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ3b3JsZHJlbWl0IiwianRpIjoiZTAzMTJkM2QtNTBkOC00YjcxLWJkMGUtNTkyODhlODM3NmU2IiwiaWF0IjoiMTc4OTAzMjQ0NSIsIlBhcnRuZXJDb2RlIjoiV3JAMTIzNDU2IiwiUGFydG5lckVtYWlsIjoid29ybGRyZW1pdEBzbS5zbyIsIlBhcnRuZXJQaG9uZSI6IisyNTI5MDc3OTE3NzkiLCJQYXJ0bmVyQ291bnRyeSI6IlNvbWFsaWEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJQYXJ0bmVyIiwiTW9wSWQiOiIyIiwiZXhwIjoxNzg5MDM2MDQ1LCJpc3MiOiJUUGx1c0luQm91bmRBcGlzIiwiYXVkIjoiVFBsdXNJbkJvdW5kQXBpcyJ9.AN_On3_J5mwxx40RJZaHGtjcC8nsZRTgR0Zlk3SCpvg",
        "mop": "TAWAKAL",
        "status": "valid",
        "account_type": "wallet",
        "receiver_name": "",
        "AccountNo": "",
        "currency": "USD",
        "ExchangeRate": "1.0",
        "remarks": "Validated successfully through Tawakal channel"
    },
    "errors": null
}`;
}
