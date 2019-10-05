//create an empty array for entries = [];
// initialise a total = 0;

//create a cache 'temp' to hold the entered key-value in text format''
// on a given button being pushed store it: text$("button").on('click', function() {
// 	var val = $(this).text();

  // test if this temp value returns a number, add to temp
// alternatives are either a decimal point, a clear function, or an operator
//   if (!isNaN(val) || val === '.') {
//     temp += val;
//     $("#answer").val(temp.substring(0,10));
    
  // If we have a given symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
//   } else if (val === 'AC') {
//     entries = [];
//     temp = '';
//     total = 0;
//     $("#answer").val('')

  // Clear last entry
//   } else if (val === 'CE') {
//     temp = '';
//     $("#answer").val('')
    
  // Change the X symbol to a recognised multiplication operator
//   } else if (val === 'x') {
//     entries.push(temp);
//     entries.push('*');
//     temp = '';
    
  // Change Obelus symbol to '/' a recognised division operator
//   } else if (val === '÷') {
//     entries.push(temp);
//     entries.push('/');
//     temp = '';

  // If we get the equals sign, do that math
//   } else if (val === '=') {
//   	entries.push(temp);

// initialise a new variable called 'nt' and assign it the value of the array and 
    // var nt = Number(entries[0]);
// for however many number or symbol entries there are take 'nt' and perform the right calc
    // for (var i = 1; i < entries.length; i++) {
    
    //   var nextNum = Number(entries[i+1])
    //   var symbol = entries[i];
      
    //   if (symbol === '+') { nt += nextNum; } 
    //   else if (symbol === '-') { nt -= nextNum; } 
    //   else if (symbol === '*') { nt *= nextNum; } 
    //   else if (symbol === '/') { nt /= nextNum; }
      
    //   i++;
    // }
    
    // Swap the '-' symbol so text input handles it correctly
    // if (nt < 0) {
    //   nt = Math.abs(nt) + '-';
    // }
    // select the answer element by id
    // and asign the 'nt' value to it:

    // $("#answer").val(nt);
	// 	entries = [];
    // temp = '';
    
  // if you're not doing the calc Push number to the array:
//   } else {
//     entries.push(temp);
//     entries.push(val);
//     temp = '';
//   }
// });