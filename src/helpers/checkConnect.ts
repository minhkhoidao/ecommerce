/**
 * Logs the number of active connections in Mongoose.
 *
 * This function retrieves the length of the `connect` property from the Mongoose object,
 * which is assumed to represent the number of active connections. It then logs this number
 * to the console.
 *
 * Note: The `connect` property in Mongoose does not actually represent the number of active connections.
 * This function will not work as expected. To get the number of active connections, you would need to use
 * a different approach, such as using the `connections` array in the Mongoose object.
 *
 * @example
 * countConnect(); // logs: Number of connection: 0
 *
 * @returns {void}
 */
import mongoose from 'mongoose';

export const countConnect = () => {
  const numConnection = mongoose.connect.length;
  console.log(`Number of connection: ${numConnection}`);
};
