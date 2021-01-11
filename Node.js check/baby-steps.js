var nval=0
process.argv.forEach((val, index) => {
    if (index > 1){
        nval += Number(val)
        
        return nval
    };

  });
  console.log(nval)