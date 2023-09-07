let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
let obj = {};

for (let i in names) {
  obj[names[i]] = age[i];

}
for (let keys in obj) {
  if (obj[keys] > 30) {
    console.log(keys)
  }
}