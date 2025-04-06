export const formatCreatedAt = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const transformRecordDates = <T extends { createdAt: string }>(
  data: T[] | null | undefined
): T[] => {
  if (!data || data.length === 0) {
    return [];
  }

  return data.map((record) => ({
    ...record,
    createdAt: formatCreatedAt(record.createdAt),
  }));
};
