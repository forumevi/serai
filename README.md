Serai — Somnia Shannon Testnet Event Engine
Serai is a resilience-first event contract monitoring and execution framework built for the Somnia Shannon Testnet (Chain ID: 50312).

Designed with deterministic execution and risk management at its core, Serai validates off-chain market parameters before constructing on-chain payloads for dreamDEX event markets via the official @somnia-chain/markets-sdk.

Executive Summary
Standard trading bots often fail under high volatility due to network jitter and poor risk controls. Serai guarantees deterministic pre-trade risk evaluation, position-size threshold enforcement, and automated on-chain payload routing specifically structured for Somnia L1.

System Architecture
Kod snippet'i
flowchart TD
    A[External Market Data / Telemetry] --> B[RiskGuard Engine]
    B -->|Check Spread & Position Limits| C{Risk Validation Safe?}
    C -->|No| D[Reject Order & Log Event]
    C -->|Yes| E[Somnia Client Core]
    E --> F[dreamDEX Event Contracts - Somnia L1]
Key Engineering Pillars
dreamDEX Direct Integration: Native interaction layer with dreamDEX market contracts via @somnia-chain/markets-sdk for automated execution and position routing.

Deterministic Risk Guard: Evaluates maximum position limits and real-time market spread thresholds prior to transaction submission to prevent slippage.

Structured Audit Logging: Retains execution metrics, risk validations, and state changes via local JSONL logging.

Automated CI/CD Pipeline: Enforces continuous compilation checks (npx tsc) and unit test verification via GitHub Actions.

Technical Specifications
Spread & Position Validation Rules
Max Position Limit: 100 Units

Max Allowed Spread: 5.0% ((Best Ask - Best Bid) / Best Ask)

Network Target: Somnia Shannon Testnet (Chain ID 50312)

Getting Started & Verification
Installation
Bash
npm install
Running Tests
Bash
npm test
Build Check
Bash
npm run build
License
Distributed under the MIT License.
