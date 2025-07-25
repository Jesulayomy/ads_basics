const groupAnagrams = (strs) => {
  let ans = {};
  for (let str of strs) {
    let key = str.split().sort().join();
    if (!ans[key]) {
      ans[key] = [];
    }
    ans[key].push(str);
  }
  return Object.values(ans);
};

function groupAnagrams2(strs) {
  let groups = {};
  for (let i = 0; i < strs.length; i++) {
    let count = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i].charCodeAt(j) - "a".charCodeAt(0)] += 1;
    }
    groups[count] ? groups[count].push(strs[i]) : (groups[count] = [strs[i]]);
  }
  return Object.values(groups);
}
