function modifyArray() {

    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    console.log("1. array1:", array1);
    console.log("1. array2:", array2);
  
    let concatArray = array1.concat(array2);
    console.log("2. შეერთებული:", concatArray);
  
    concatArray.copyWithin(concatArray.length - 2, 0, 2);
    console.log("3. copyWithin-ის შემდეგ:", concatArray);

    concatArray.fill(0, concatArray.length - 3);
    console.log("4. fill-ის შემდეგ:", concatArray);
  
    let lastElement = concatArray.pop();
    console.log("5. წაშლილი ბოლო:", lastElement);
    console.log("5. pop-ის შემდეგ:", concatArray);
  
    let firstElement = concatArray.shift();
    console.log("6. წაშლილი პირველი:", firstElement);
    console.log("6. shift-ის შემდეგ:", concatArray);
  
    concatArray.unshift(10, 20);
    console.log("7. საბოლოო  მასივი:", concatArray);
  }
  
  
  console.log(modifyArray());