// code your solution here
const record = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"},
  { year: "2015", result: "y"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "2012", result: "N/A"},
  { year: "2011", result: "N/A"},
  { year: "2010", result: "N/A"},
  { year: "2009", result: "N/A"},
  { year: "2008", result: "N/A"}
]
function superbowlWin(record){
const winning = record.find( function (item){
  return item.result === "W"});
 if(winning){
  return winning.year;
 }else{
  return undefined;
 }
}
console.log(superbowlWin(record))