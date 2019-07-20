const __timeid_start__ = Date.now();

export default () => {
  return String(Date.now() - __timeid_start__) + String(Math.random());
};
