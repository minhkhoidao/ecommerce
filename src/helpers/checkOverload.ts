/**
 * Monitors system resources and logs the status every 5 seconds.
 *
 * This function checks the number of active MongoDB connections, the number of CPU cores,
 * and the memory usage of the Node.js process. It then logs these values to the console.
 *
 * If the number of active MongoDB connections exceeds five times the number of CPU cores,
 * it logs a "Connection Overload" message to the console.
 *
 * @example
 * checkOverload();
 * // logs: Number of connection: 1
 * // logs: Memory Usage: 30.123 MB
 * // logs: Connection Overload (if number of connections exceeds five times the number of CPU cores)
 *
 * @returns {void}
 */
import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const SECONDS = 5000;

export const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCpuCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connections based on number of CPU cores
    const maxConnection = numCpuCore * 5;

    console.log(`Number of connection: ${numConnection}`);
    console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnection) {
      console.log(`Connection Overload`);
    }
  }, SECONDS); // monitor every 5 seconds;
};
