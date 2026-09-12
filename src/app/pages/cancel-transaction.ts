import { Component } from '@angular/core';
import { CodeBlockComponent } from '../components/code-block';
import { HighlightJsonPipe, HighlightCurlPipe } from '../pipes/highlight.pipe';

@Component({
  selector: 'app-cancel-transaction',
  standalone: true,
  imports: [CodeBlockComponent, HighlightJsonPipe, HighlightCurlPipe],
  template: `
    <section id="section-3">
      <h2>Cancel Transaction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div class="code-block" style="margin-bottom: 24px;">
        <div class="code-block-header"><span class="code-lang">HTTP</span></div>
        <pre><code><span class="method">POST</span> <span class="path">/api/User/CancelTransaction</span></code></pre>
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
            <td class="field-name">x-api-key</td>
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
            <td class="field-name">TplusTransactionReferenceId<span class="req">*</span></td>
            <td><span class="type-badge">string</span></td>
            <td>Required</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <td class="field-name">CancellationReasonId<span class="req">*</span></td>
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
export class CancelTransactionComponent {
  curlRequest = `curl --location 'https://inboundv5.sombank.so/api/User/CancelTransaction' \\
--header 'x-api-key: yMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQyMVC43RGT6lhesMwj-HjC8tVSOfMSpSweAZqmApzuUQ' \\
--data '{
    "TplusTransactionReferenceId":"IB26091000001",
    "CancellationReasonId":"2"
}'`;

  jsonResponse = `{
    "success": true,
    "message": "Transaction cancelled successfully",
    "status": 200,
    "data": {
        "transactionId": "IB26091000001",
        "status": "Cancelled"
    },
    "errors": null
}`;
}
