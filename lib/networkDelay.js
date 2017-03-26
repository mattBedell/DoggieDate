const simulateNetworkDelay = (delay) => {
  return (req, res, next) => {
    setTimeout(() => {
      next();
    }, delay);
  };
};

module.exports = simulateNetworkDelay;