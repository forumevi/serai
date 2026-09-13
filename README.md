<h1>Serai — Somnia Shannon Testnet Event Engine</h1>

<p>Serai is a resilience-first event contract monitoring and execution framework built for the <strong>Somnia Shannon Testnet</strong> (<code>Chain ID: 50312</code>).</p>

<p>Designed with deterministic execution and risk management at its core, Serai validates off-chain market parameters before constructing on-chain payloads for dreamDEX event markets via the official <code>@somnia-chain/markets-sdk</code>.</p>

<hr />

<h2>Executive Summary</h2>
<p>Standard trading bots often fail under high volatility due to network jitter and poor risk controls. Serai guarantees deterministic pre-trade risk evaluation, position-size threshold enforcement, and automated on-chain payload routing specifically structured for Somnia L1.</p>

<hr />

<h2>Key Engineering Pillars</h2>
<ul>
  <li><strong>dreamDEX Direct Integration</strong>: Native interaction layer with dreamDEX market contracts via <code>@somnia-chain/markets-sdk</code> for automated execution and position routing.</li>
  <li><strong>Deterministic Risk Guard</strong>: Evaluates maximum position limits and real-time market spread thresholds prior to transaction submission to prevent slippage.</li>
  <li><strong>Structured Audit Logging</strong>: Retains execution metrics, risk validations, and state changes via local JSONL logging.</li>
  <li><strong>Automated CI/CD Pipeline</strong>: Enforces continuous compilation checks (<code>npm run build</code>) and unit test verification via GitHub Actions.</li>
</ul>

<hr />

<h2>Technical Specifications</h2>
<h3>Spread & Position Validation Rules</h3>
<ul>
  <li><strong>Max Position Limit</strong>: 100 Units</li>
  <li><strong>Max Allowed Spread</strong>: 5.0% (<code>(Best Ask - Best Bid) / Best Ask</code>)</li>
  <li><strong>Network Target</strong>: Somnia Shannon Testnet (Chain ID 50312)</li>
</ul>

<hr />

<h2>Getting Started & Verification</h2>

<h3>Installation</h3>
<pre><code>npm install</code></pre>

<h3>Running Tests</h3>
<pre><code>npm test</code></pre>

<h3>Build Check</h3>
<pre><code>npm run build</code></pre>

<hr />

<h2>License</h2>
<p>Distributed under the MIT License.</p>
