export const KEYS = {
  creators: () => ['creators'],
  filteredCreators: (filters: { search: string }) => [...KEYS.creators(), { ...filters }],
};
