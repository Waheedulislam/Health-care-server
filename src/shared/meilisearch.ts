import { MeiliSearch } from 'meilisearch';

let meiliClient;

try {
  meiliClient = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: 'aSampleMasterKey',
  });
  console.log('MeiliSearch client initialized successfully!');
} catch (error) {
  console.error('Failed to initialize MeiliSearch client:', error);
}

export default meiliClient;
