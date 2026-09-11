export interface ResilienceConfig {
  baseDelayMs: number;
  maxDelayMs: number;
  maxRetries: number;
}

export class AttestationResilienceManager {
  private config: ResilienceConfig;

  constructor(config?: Partial<ResilienceConfig>) {
    this.config = {
      baseDelayMs: config?.baseDelayMs ?? 1000,
      maxDelayMs: config?.maxDelayMs ?? 32000,
      maxRetries: config?.maxRetries ?? 5,
    };
  }

  public calculateJitterDelay(attempt: number): number {
    const temp = Math.min(this.config.maxDelayMs, this.config.baseDelayMs * Math.pow(2, attempt));
    return Math.floor(Math.random() * temp);
  }

  public async executeWithResilience<T>(fn: () => Promise<T>): Promise<T> {
    let attempt = 0;
    while (true) {
      try {
        return await fn();
      } catch (error: any) {
        attempt++;
        if (attempt > this.config.maxRetries) {
          throw new Error(`[SERAI Resilience] Exceeded maximum retries (${this.config.maxRetries}): ${error.message}`);
        }
        const delay = this.calculateJitterDelay(attempt);
        console.warn(`[SERAI] Rate-limit encountered (Attempt ${attempt}/${this.config.maxRetries}). Backing off for ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
}
