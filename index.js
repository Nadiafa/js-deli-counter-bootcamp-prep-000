function takeANumber(line, name) {
 line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing() {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
     line.slice(0, line.length-1)
    }
  return line
  }

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    
  }
}



// describe('nowServing', () => {
//     it('returns the line is empty when no one is on line', () => {
//       expect(nowServing([])).toEqual("There is nobody waiting to be served!");
//     });

//     it('returns an announcement about the person it is serving, and shifts the line', () => {
//       const deliLine = ["Steven", "Blake", "Avi"]
//       expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
//       expect(deliLine).toEqual(["Blake", "Avi"]);
//     });
//   });