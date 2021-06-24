//function that display value of text
function dis(val)
{document.getElementById("result").value+=val}

  
  //function that evaluates the digit and return the result
  function solve()
  {
      let x = document.getElementById("result").value
      let y = eval(x)
      document.getElementById("result").value = y
  }

  //function of clear ,it clears the display 
    function clr()
    {
        document.getElementById("result").value = ""
    }
