import { RiskGuard, OrderPayload } from './riskGuard';

describe('RiskGuard Unit Tests', () => {
  it('should allow valid order payloads', () => {
    const validOrder: OrderPayload = {
      marketId: 'dreamDEX-MARKET-1',
      price: 10,
      amount: 20,
      bestBid: 9.9,
      bestAsk: 10.1
    };

    const result = RiskGuard.validateOrder(validOrder);
    expect(result.safe).toBe(true);
  });

  it('should reject orders exceeding position limit', () => {
    const invalidOrder: OrderPayload = {
      marketId: 'dreamDEX-MARKET-1',
      price: 10,
      amount: 500, // Limit 100
      bestBid: 9.9,
      bestAsk: 10.1
    };

    const result = RiskGuard.validateOrder(invalidOrder);
    expect(result.safe).toBe(false);
    expect(result.reason).toContain('Exceeds maximum position size limit');
  });
});
