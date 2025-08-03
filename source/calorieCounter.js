function calculateTotalCalories(entries) {
  return entries.reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
}

module.exports = { calculateTotalCalories };
