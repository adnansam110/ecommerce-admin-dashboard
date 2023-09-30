// short random string for ids - not guaranteed to be unique
export const randomId = function(length = 6) {
  return Math.random().toString(36).substring(2, length+2);
};
