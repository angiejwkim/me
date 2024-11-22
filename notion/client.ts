import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

function validate_environment() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('Missing NOTION_API_KEY.');
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('Missing NOTION_DATABASE_ID.');
  }
}

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// TODO: nit - refactor these to not repeat.
function extractDisplay(
  properties: PageObjectResponse['properties']
): string {
  const displayProperty = properties['display'];
  if (!displayProperty || displayProperty['type'] !== 'title')
    return '';

  return displayProperty['title'][0]?.['plain_text'] || '';
}

function extractUrl(
  properties: PageObjectResponse['properties']
): string {
  const urlProperty = properties['url'];
  if (!urlProperty || urlProperty['type'] !== 'rich_text') return '';

  return urlProperty['rich_text'][0]?.['plain_text'] || '';
}

export async function queryDatabase() {
  validate_environment();
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    return response.results
      .filter(
        (result): result is PageObjectResponse =>
          'properties' in result
      )
      .map((result) => [
        extractDisplay(result.properties),
        extractUrl(result.properties),
      ]);
  } catch (error) {
    console.error('Error querying Notion database:', error);
    throw error;
  }
}
