


var input;
  
  function addInts(input)
  { 
    var sum = 0;
        for (var i = 1; i <= input; i++) 
    {
            sum += i;
        }
        return sum;
  }
  
  input=prompt("Enter a number:", 0);
  input=parseInt(input);
  document.write(addInts(input));