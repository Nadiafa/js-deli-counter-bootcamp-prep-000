var katzDeli = [];

function takeANumber(katzDeliLine, name) {
 for (var i=0; i<katzDeliLine.length; i++) {
   katzDeliLine[i].push(katzDeli.name)
 } 
 return katzDeli
}




// describe('deli', () => {
//   describe('takeANumber', () => {
//     var katzDeli;
//     var otherDeli;

//     beforeEach(() => {
//       katzDeli = [];
//       otherDeli = ["Steven", "Blake", "Avi"];
//     });

//     it('adds a person to the line', () => {
//       expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
//       expect(katzDeli).toEqual(['Ada']);
//     });

//     it('appends the person the end of the line if there are already people on it', () => {
//       expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
//       expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
//     });

//     it("properly handles multiple people being added", () => {
//       takeANumber(katzDeli, 'Ada');
//       takeANumber(katzDeli, 'Grace');
//       takeANumber(katzDeli, 'Kent');

//       expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
//     });
//   });


// function currentLine(line) {
//   if (!line.length) {
//     return "The line is currently empty."
//   }

//   const numbersAndNames = []

//   for (let i = 0, l = line.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`)
//   }

//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };