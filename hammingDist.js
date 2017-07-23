/*/

Calculates Hamming distance between two integers...

"The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231."

repeated div by 2 dec to bin
    eg 45 -- 
            45 /  2 = 22 rem 1
            22 /  2 = 11 rem 0
            11 /  2 = 5  rem 1
            5  /  2 = 2  rem 1
            2 /   2 = 1  rem 0
            1 /   2 = 0  rem 1 

--convert x to bin
--convert y to bin
--calc hamming distance
/*/

function hd(x, y){
  var divXLeft = x;
  var divYLeft = y;
  var xBin = Array();
  var yBin = Array();
  var hammingDistance = 0;
  
  while (divXLeft >= 0) {
    xBin.unshift(divXLeft % 2);
    if (divXLeft % 2 > 0){
       divXLeft = divXLeft / 2 - .5;
    }
    else divXLeft = divXLeft / 2;
    if (divXLeft === 0) break; 
  }
  
  
  while (divYLeft > 0) {
    yBin.unshift(divYLeft % 2);
    if (divYLeft % 2 > 0){
       divYLeft = divYLeft / 2 - .5;
    }
    else divYLeft = divYLeft / 2;
    if (divYLeft === 0) break;
  }

  while (xBin.length < yBin.length) {
    xBin.unshift(0);
  }
  
  while (yBin.length < xBin.length) {
    yBin.unshift(0);
  }
  
  console.log(xBin);
  console.log(yBin);
  
for (var i = 0; i < xBin.length || i < yBin.length; i++){
  if (xBin[i] != yBin[i]){
    hammingDistance = hammingDistance + 1;
  }
  console.log(i, hammingDistance);
}
return hammingDistance;

}