import { CONFIG } from './config';

export interface OrderPayload {
  marketId: string;
  price: number;
  amount: number;
  bestBid: number;
  bestAsk: number;
}

export class RiskGuard {
  static validateOrder(order: OrderPayload): { safe: boolean; reason?: string } {
    if (order.amount > CONFIG.MAX_POSITION_SIZE) {
      return { safe: false, reason: 'Exceeds maximum position size limit.' };
    }

    const spread = (order.bestAsk - order.bestBid) / order.bestAsk;
    if (spread > CONFIG.MAX_SPREAD_THRES) {
      return { safe: false, reason: `Spread too high: ${(spread * 100).toFixed(2)}%` };
    }

    return { safe: true };
  }
}
