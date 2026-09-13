import { SomniaClient } from './client';
import { RiskGuard, OrderPayload } from './riskGuard';

async function main() {
  console.log('[Serai Bot] Somnia Shannon Testnet Botu Başlatılıyor...');
  const client = new SomniaClient();

  // Örnek Piyasa Verisi Simülasyonu ve Risk Kontrolü
  const sampleOrder: OrderPayload = {
    marketId: 'dreamDEX-MARKET-1',
    price: 10.5,
    amount: 50,
    bestBid: 10.4,
    bestAsk: 10.6
  };

  const riskCheck = RiskGuard.validateOrder(sampleOrder);

  if (!riskCheck.safe) {
    console.error(`[Risk Guard Engeli] İşlem Reddedildi: ${riskCheck.reason}`);
    return;
  }

  console.log(`[Risk Guard Onayı] İşlem güvenli. Market: ${sampleOrder.marketId}`);
  // Buradan itibaren @somnia-chain/markets-sdk ile kontrat tetiklenir
}

main().catch(console.error);
