import Redis from "ioredis";

const redis = new Redis({
  host: process.env.UPSTASH_REDIS_REST_URL,
  port: parseInt(process.env.UPSTASH_REDIS_PORT as string, 10),
  password: process.env.UPSTASH_REDIS_PASSWORD,
  tls: {
    rejectUnauthorized: false,
  },
});

export default redis;
