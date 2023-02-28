function BaseConvert(fromBase, number, toBase) {
    
    let decimal = 0;

    for (let i = 0; i < number.length; i++) 
    {
      decimal = decimal * fromBase + parseInt(number[i], fromBase);
    }
    
    result = decimal.toString(toBase);
    // console.log(result)

    if(isNaN(decimal))
    {
      result ="Error";
    }

    return result;


  }

  console.log(BaseConvert(10,'2702',16));
  
  function convert() {
    let number = document.getElementById("number").value;
    let fromBase = document.getElementById("fromBase").value;
    let toBase = document.getElementById("toBase").value;

    if (number == "" || fromBase== "" || toBase== "") 
    {
      alert("All fields must be filled");
      return;
    }

    if (fromBase < 2 || toBase < 2 || fromBase > 16 || toBase > 16) 
    {
      alert("All the bases must be between 2 and 16");
      return;
    }
    
    document.getElementById("result").innerHTML = BaseConvert(fromBase, number, toBase);
  }
