const requests = [];

function logRequest(zipCode) {
  requests.push({
    zipCode,
    timestamp: new Date().toISOString(),
  });
}

function getStats() {
  const counts = {};

  requests.forEach((r) => {
    counts[r.zipCode] = (counts[r.zipCode] || 0) + 1;
  });

  return {
    totalLookups: requests.length,
    zipBreakdown: counts,
  };
}

module.exports = {
  logRequest,
  getStats,
};