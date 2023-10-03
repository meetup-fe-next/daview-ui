export const KEYS = {
  lectures: () => ['lectures'],
  filteredLectures: (filters: { search: string }) => [...KEYS.lectures(), { ...filters }],
};
