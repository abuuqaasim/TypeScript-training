var sports = ["Soccer", "Golf", "Tennis"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var s = sports_1[_i];
    console.log(s);
}
console.log("==============Growable array test below===========================");
sports.push('Hockey');
sports.push("Cricket");
console.log(sports.length);
