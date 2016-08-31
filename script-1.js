var xLoc = -30;
var yLoc = -2;
var zLoc = -30;

// the alphabet, a = 0, b = 1, etc
// numerics: 0 = 40, 1 = 41, 2 = 42, etc
// special characters ...
// 26 = .  27 = !  28 = '  29 = "  30 = ?  31 = ;  32 = :
// 33 = openparen  34 = closeparen 35 = hyphen  36 = $
// % = 37  nullbox = 38    # = 39  space = 50 comma = 51

alphabetVR = [
  [[1,0,0,1], [1,1,1,1], [1,0,0,1], [1,1,1,1]],
  [[1,0,1,0], [1,1,0,1], [1,0,1,0], [1,1,0,0]],
  [[1,1,1,1], [1,0,0,0], [1,0,0,0], [1,1,1,1]],
  [[1,1,1,0], [1,0,0,1], [1,0,0,1], [1,1,1,0]],
  [[1,1,1,1], [1,0,0,0], [1,1,1,0], [1,1,1,1]],
  [[1,0,0,0], [1,1,1,0], [1,0,0,0], [1,1,1,1]],
  [[1,1,1,1], [1,0,0,1], [1,0,0,0], [1,1,1,1]],
  [[1,0,0,1], [1,1,1,1], [1,0,0,1], [1,0,0,1]],
  [[1,1,1,1], [0,1,0,0], [0,1,0,0], [1,1,1,1]],
  [[1,1,1,1], [1,0,0,1], [0,0,0,1], [1,1,1,1]],
  [[1,0,0,1], [1,0,1,0], [1,1,0,0], [1,0,1,1]],
  [[1,1,1,1], [1,0,0,0], [1,0,0,0], [1,0,0,0]],
  [[1,0,0,1], [1,0,0,1], [1,0,1,1], [1,1,1,1]],
  [[1,0,0,1], [1,0,0,1], [1,0,1,1], [1,1,0,1]],
  [[1,1,1,1], [1,0,0,1], [1,0,0,1], [1,1,1,1]],
  [[1,0,0,0], [1,1,1,1], [1,0,0,1], [1,1,1,1]],
  [[1,1,1,1], [1,0,1,1], [1,0,0,1], [1,1,1,1]],
  [[1,0,1,0], [1,1,1,1], [1,0,0,1], [1,1,1,1]],
  [[0,1,1,1], [1,1,1,1], [1,0,0,0], [1,1,1,1]],
  [[0,1,0,0], [0,1,0,0], [0,1,0,0], [1,1,1,1]],
  [[1,1,1,1], [1,0,0,1], [1,0,0,1], [1,0,0,1]],
  [[0,1,1,0], [1,0,0,1], [1,0,0,1], [1,0,0,1]],
  [[1,1,1,1], [1,0,1,1], [1,0,0,1], [1,0,0,1]],
  [[1,0,0,1], [0,1,1,0], [0,1,1,0], [1,0,0,1]],
  [[0,1,0,0], [1,1,1,1], [1,0,0,1], [1,0,0,1]],
  [[1,1,1,1], [0,1,0,0], [0,0,1,0], [1,1,1,1]],
  [[0,0,1,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
  [[0,0,1,0], [0,0,0,0], [0,0,1,0], [0,0,1,0]],
  [[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,1,0]],
  [[0,0,0,0], [0,0,0,0], [1,0,1,0], [1,0,1,0]],
  [[0,0,1,0], [0,0,0,0], [0,0,1,0], [1,1,1,0]],
  [[0,0,1,0], [0,0,0,0], [0,0,1,0], [0,1,0,0]],
  [[0,0,1,0], [0,0,0,0], [0,0,1,0], [0,0,0,0]],
  [[0,0,1,0], [0,1,0,0], [0,1,0,0], [0,0,1,0]],
  [[0,1,0,0], [0,0,1,0], [0,0,1,0], [0,1,0,0]],
  [[0,0,0,0], [0,0,0,0], [0,1,1,0], [0,0,0,0]],
  [[0,1,0,0], [0,0,1,0], [0,1,0,0], [0,0,1,0]],
  [[1,0,0,1], [0,1,0,0], [0,0,1,0], [1,0,0,1]],
  [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]],
  [[0,1,1,0], [1,1,1,1], [1,1,1,1], [0,1,1,0]],
  [[1,1,1,1], [1,0,0,1], [1,0,0,1], [1,1,1,1]],
  [[1,1,1,1], [0,0,1,0], [0,0,1,0], [1,1,1,1]],
  [[1,1,1,1], [0,1,0,0], [0,0,1,0], [1,1,1,1]],
  [[1,1,1,1], [0,0,0,1], [0,1,1,1], [1,1,1,1]],
  [[0,0,0,1], [1,1,1,1], [1,0,0,1], [1,0,0,1]],
  [[0,1,1,1], [1,1,1,1], [1,0,0,0], [1,1,1,1]],
  [[1,1,1,1], [1,0,0,1], [1,1,1,1], [1,0,0,0]],
  [[0,0,0,1], [0,0,0,1], [0,0,0,1], [1,1,1,1]],
  [[0,1,1,1], [1,1,0,1], [1,0,1,1], [1,1,1,0]],
  [[0,0,0,1], [1,1,1,1], [1,0,0,1], [1,1,1,1]],
  [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
  [[0,0,1,0], [0,1,1,0], [0,0,0,0], [0,0,0,0]]
];

outputArray = [];
var testMessage = prompt("Type the message you want to display!");

/* 
toASCIICodes takes the message, converts it to ASCII, map those ASCII values onto codes for the characters. Currently only maps ones
that are letters, i.e. ASCII 97 to 122, and the space, which is ASCII 127 plus a handful of special charaters noted above.
*/

function toASCIICode() {
  var string = testMessage.toLowerCase();
  console.log(string);
  len = string.length;
  for (r = 0; r < len; r++) {
    var numOfCharacter = string.charCodeAt(r);
    if (numOfCharacter > 96 && numOfCharacter < 123) {
      var charToAdd = numOfCharacter - 97;
    } else if (numOfCharacter > 47 && numOfCharacter < 58) {
      var charToAdd = numOfCharacter - 8;
    }    
    else { 
      switch(numOfCharacter) {
      case 32:
        charToAdd = 50;
        break;
      case 46:
        charToAdd = 26;
        break;
      case 33:
        charToAdd = 27;
        break;
      case 39:
        charToAdd = 28;
        break;
      case 34:
        charToAdd = 29;
        break;
      case 63:
        charToAdd = 30;
        break;
      case 59:
        charToAdd = 31;
        break;
      case 58:
        charToAdd = 32;
        break;
      case 40:
        charToAdd = 33;
        break;
      case 41:
        charToAdd = 34;
        break;
      case 45:
        charToAdd = 35;
        break;
      case 36:
        charToAdd = 36;
        break;
      case 37:
        charToAdd = 37;
        break;
      case 35:
        charToAdd = 39;
        break;
      case 44:
        charToAdd = 51;
        break;
      default:
        charToAdd = 38;     
    }
    }
    outputArray.push(charToAdd)
  } 
  console.log(outputArray);
}

/* this takes outputArray and iterates through, checking to see if each element in the bitmap of the character is 1 or 0. If 1, it puts a cube in location; if 0, it doesn't,
and merely advances ahead ++ by the cube size, which here is hardcoded as 1.
*/

function printMessage() {
  for (k = 0; k < outputArray.length; k++) {
  for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    if (alphabetVR[outputArray[k]][i][j] == 1) {
     var toAddPart2 = xLoc + " " + yLoc + " " + zLoc;
     var toAddPart1 = "<a-box color='#cbef56' depth='1' height='1' width='1' position='";
     var toAddPart3 = "' ></a-box>";
     var addedTogether = toAddPart1.concat(toAddPart2,toAddPart3);
     $("#stagingArea").append(addedTogether); 
      }
      xLoc++;
    }
    xLoc = xLoc - 4;
    yLoc++;
  }
  xLoc = xLoc + 5.5; 
  yLoc = yLoc -4;  
 }
}


toASCIICode();
printMessage();



