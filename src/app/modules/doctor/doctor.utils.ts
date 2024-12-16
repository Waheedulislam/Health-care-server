import { MeiliSearch } from 'meilisearch';
import meiliClient from '../../../shared/meilisearch';
// import meiliClient from '../../../shared/meilisearch';

export const deleteDoctorFromMeili = async (doctorId: string) => {
  // TypeScript এর জন্য টাইপ নিশ্চিত করা
  const index = meiliClient.index('doctors');

  try {
    await index.deleteDocument(doctorId);
    console.log(
      `Doctor with ID ${doctorId} deleted successfully from MeiliSearch.`,
    );
  } catch (error) {
    console.error('Error deleting doctor from MeiliSearch:', error);
  }
};
