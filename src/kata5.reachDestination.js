const reachDestination = (distance, speed) => {
  const timeToDestination = Math.round((distance / speed) * 2) / 2;
  return `I should be there in ${timeToDestination} hours.`;
};

module.exports = reachDestination;
