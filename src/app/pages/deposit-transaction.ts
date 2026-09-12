import { Component } from '@angular/core';
import { CodeBlockComponent } from '../components/code-block';
import { HighlightJsonPipe, HighlightCurlPipe } from '../pipes/highlight.pipe';

@Component({
  selector: 'app-deposit-transaction',
  standalone: true,
  imports: [CodeBlockComponent, HighlightJsonPipe, HighlightCurlPipe],
  template: `
    <section id="section-2">
      <h2>Deposit Transaction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div class="code-block" style="margin-bottom: 24px;">
        <div class="code-block-header"><span class="code-lang">HTTP</span></div>
        <pre><code><span class="method">POST</span> <span class="path">/api/User/DepositTransaction</span></code></pre>
      </div>

      <h3>Required Headers</h3>
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="field-name">X-API-Key</td>
            <td>&#123;your_api_key&#125; <span class="req">*</span></td>
          </tr>
          <tr>
            <td class="field-name">Content-Type</td>
            <td>application/json <span class="req">*</span></td>
          </tr>
        </tbody>
      </table>

      <h3>Request Body</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="field-name">userName<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">password<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">MOP<span class="req">*</span></td>
            <td><span class="type-badge">TPLUS</span></td>
            <td>Optional</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">accountNo<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">amount<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">MMtServiceName<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">charges<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">description</td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">remittanceReferenceNumber<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">country<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">city<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">remitterName<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">remitterMobile<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">IdType</td>
            <td><span class="type-badge">string</span></td>
            <td>Optional</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">DateOfBirth<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">ExpiryDate<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">IssueDate<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">IdNumber<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
        </tbody>
      </table>

      <h4>Example Request</h4>
      <app-code-block lang="cURL" [codeToCopy]="curlRequest">
        <span [innerHTML]="curlRequest | highlightCurl"></span>
      </app-code-block>

      <h3>Response</h3>
      <p><em>(Placeholder response as the exact JSON response was not provided)</em></p>
      <app-code-block lang="JSON" [codeToCopy]="jsonResponse">
        <span [innerHTML]="jsonResponse | highlightJson"></span>
      </app-code-block>
    </section>
  `,
})
export class DepositTransactionComponent {
  curlRequest = `curl --location 'https://inboundv5.sombank.so/api/User/DepositTransaction' \\
--header 'X-API-Key: yMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQyMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQ' \\
--data-raw '{
    "userName": "",
    "password": "",
    "MOP": "TPLUS",
    "accountNo": "",
    "amount": "1",
    "MMtServiceName": "",
    "charges": "1",
    "description": "Deposit",
    "remittanceReferenceNumber": "RE0000001610",
    "country": "UAE",
    "city": "DUBAI",
    "remitterName": "",
    "remitterMobile": "",
    "IdType": "",
    "DateOfBirth": "",
    "ExpiryDate": "",
    "IssueDate": "",
    "IdNumber": ""
}'`;

  jsonResponse = `{
    "success": true,
    "message": "Deposit processed successfully",
    "status": 200,
    "data": {
        "transactionId": "TXN9876543210",
        "status": "Completed"
    },
    "errors": null
}`;
}
