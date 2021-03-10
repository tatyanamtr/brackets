module.exports = function check(str, bracketsConfig) {
	let arr = str.split("");
  let n = 0;
  for ( let i = 0; i < arr.length; i++ ) {
  	if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") n++;
  	if (arr[i] == ")" || arr[i] == "]" || arr[i] == "}") n--;
  	if (n<0) return false;
  }
  return n==0;
}
