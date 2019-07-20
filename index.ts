const __timeid_start__ = Date.now();

export const timeid = () => {
  return String(Date.now() - __timeid_start__) + String(Math.random());
};
export default timeid;