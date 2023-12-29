const areUtcDatesSameDay = (utc1: string, utc2: string) => {
  const fromUtc1 = new Date(utc1);
  const fromDate1 = Date.UTC(
    fromUtc1.getFullYear(),
    fromUtc1.getMonth(),
    fromUtc1.getDate()
  );

  const fromUtc2 = new Date(utc2);
  const fromDate2 = Date.UTC(
    fromUtc2.getFullYear(),
    fromUtc2.getMonth(),
    fromUtc2.getDate()
  );

  const daysBetween = Math.floor(
    Math.abs(fromDate1 - fromDate2) / 1000 / 60 / 60 / 24
  );

  return !daysBetween;
};

export default areUtcDatesSameDay;
