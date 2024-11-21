import { RateLimiter } from 'limiter';

// Create a rate limiter that allows 100 requests per minute
const limiter = new RateLimiter({
  tokensPerInterval: 100,
  interval: 'minute',
  fireImmediately: true
});

export const checkRateLimit = async (): Promise<boolean> => {
  const remainingRequests = await limiter.removeTokens(1);
  return remainingRequests >= 0;
};