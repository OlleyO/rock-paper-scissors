/**
 * @module
 */

const getEnvVar = (key: string) => {
  return process.env[key] || "";
};

/** API entrypoint */
export const API_URL = getEnvVar("NEXT_PUBLIC_API_URL");

export const NODE_ENV = getEnvVar("NODE_ENV");

export const isDevEnv = NODE_ENV === "development";

export const isProdEnv = NODE_ENV === "production";
