export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-22';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);
export const apiKey = assertValue(
  process.env.NODE_ENV === 'production'
    ? process.env.SANITY_API_READ_TOKEN
    : process.env.NEXT_PUBLIC_SANITY_STUDIO_API_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_API_TOKEN or SANITY_API_READ_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
