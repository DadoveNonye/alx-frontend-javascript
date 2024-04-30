const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (typeof endpoint !== "object" || !endpoint.protocol || !endpoint.name) {
    throw new TypeError("Invalid endpoint argument");
  }

  let callCount = weakMap.get(endpoint);
  if (callCount === undefined) {
    callCount = 0;
  }

  callCount++;
  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error("Endpoint load is high");
  }

  console.log(`Querying endpoint: ${endpoint.protocol}://${endpoint.name}`);
}

export { weakMap, queryAPI };
