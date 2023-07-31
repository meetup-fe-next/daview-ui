import lectureData from '@/data/lectureData';

export const getLectures = async (): Promise<any> => {
  const items = lectureData;
  const total = lectureData.length;

  return { items, total };
};
