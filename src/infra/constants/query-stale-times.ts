export enum StaleTimes {
  None = 0, // 0 seconds
  Small = 180000, // 3 minutes
  Normal = 300000, // 5 minutes
  Long = 600000, // 10 minutes
  ExtraLong = 1800000, // 30 minutes
  Infinity = Number.MAX_VALUE, // Simulates infinity
}
