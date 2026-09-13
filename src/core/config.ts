import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  CHAIN_ID: 50312,
  RPC_URL: process.env.SOMNIA_RPC_URL || 'https://dream-rpc.somnia.network',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  MAX_SPREAD_THRES: 0.05, // %5 Max kabul edilebilir spread
  MAX_POSITION_SIZE: 100, // İşlem başına max limit
};
