/**
 * Converts an object with numeric keys to a reindexed object (0-based, sequential).
 *
 * @param {{ [id: string]: any }} obj - The object to reindex.
 * @returns {{ [id: string]: any }} The reindexed object.
 */
const reindexObject = (obj) => {
  return Object.values(obj).reduce((acc, curr, idx) => {
    acc[idx] = curr;
    return acc;
  }, {});
};

/**
 * Handles view or delete actions on an object list based on ID.
 *
 * @param {{ [id: string]: { name: string, codename: string } }} objList - The object list with string keys.
 * @param {number} id - The ID of the item to be processed.
 * @param {"view"|"delete"} action - The action to perform: "view" or "delete".
 * @returns {object|undefined} The viewed object, or the updated object list after deletion.
 */
function handleObjectList(objList, id, action) {
  const key = id.toString();

  if (!(key in objList)) {
    console.warn(`ID ${id} not found.`);
    return;
  }

  switch (action) {
    case "view":
      return objList[key];

    case "delete":
      delete objList[key];
      return reindexObject(objList);

    default:
      console.warn(`Action "${action}" is not supported.`);
      return;
  }
}

/**
 * Handles view or delete actions using Object.entries loop.
 *
 * @param {{ [id: string]: { name: string, codename: string } }} objList - The object list with string keys.
 * @param {number} id - The ID of the item to be processed.
 * @param {"view"|"delete"} action - The action to perform.
 * @returns {object|undefined} The viewed object or updated object list after deletion.
 */
function handleObjectListWithEntries(objList, id, action) {
  const entries = Object.entries(objList);

  for (const [key, value] of entries) {
    if (Number(key) === id) {
      if (action === "view") return value;
      if (action === "delete") {
        delete objList[key];
        return reindexObject(objList);
      }
    }
  }

  console.warn("ID not found or action unsupported.");
}

/**
 * Handles view or delete actions using Map for key-value operations.
 *
 * @param {{ [id: string]: { name: string, codename: string } }} dataMap - The object list to convert to Map.
 * @param {number} id - The ID of the item to be processed.
 * @param {"view"|"delete"} action - The action to perform.
 * @returns {object|undefined} The viewed object or updated object list after deletion.
 */
function handleObjectListWithMap(dataMap, id, action) {
  const map = new Map(Object.entries(dataMap));

  const key = id.toString();

  if (!map.has(key)) return;

  if (action === "view") {
    return map.get(key);
  }

  if (action === "delete") {
    map.delete(key);
    const obj = Object.fromEntries(map);
    return reindexObject(obj);
  }
}

console.log(
  handleObjectList(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "view"
  )
);
console.log(
  handleObjectListWithEntries(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "view"
  )
);
console.log(
  handleObjectListWithMap(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "view"
  )
);
// { name:"awtian",codename:"the black assasin"}

console.log(
  handleObjectList(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "delete"
  )
);
console.log(
  handleObjectListWithEntries(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "delete"
  )
);
console.log(
  handleObjectListWithMap(
    {
      0: { name: "dimas", codename: "surgeon of death" },
      1: { name: "awtian", codename: "the black assasin" },
      2: { name: "icha", codename: "the real dementor" },
    },
    1,
    "delete"
  )
);
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }
*/
