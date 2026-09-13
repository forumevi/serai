import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { CONFIG } from './config';

export class SomniaClient {
  public publicClient;
  public walletClient;
  public account;

  constructor() {
    this.publicClient = createPublicClient({
      transport: http(CONFIG.RPC_URL)
    });

    if (CONFIG.PRIVATE_KEY) {
      this.account = privateKeyToAccount(`0x${CONFIG.PRIVATE_KEY.replace('0x', '')}`);
      this.walletClient = createWalletClient({
        account: this.account,
        transport: http(CONFIG.RPC_URL)
      });
    }
  }
}
