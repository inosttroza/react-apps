const variable = "Hello"

variable.charAt(4);             //--->o
variable.concat("","world");   //--->Hello world
variable.startsWith("H");       //--->true
variable.endsWith("o");     //--->true
variable.includes("x");     //--->false
variable.indexOf("l");      //--->2
variable.lastIndexOf("l");  //--->3
variable.match(/[A-Z]/g);    //--->['H']
variable.padStart("6","?");   //--->?Hello
variable.padEnd("6","?");    //--->HelloHelloHello
variable.repeat(3);          //--->Hey 
variable.replace("llo","y");  //--->l
variable.slice(1,3);          //--->el
variable.split("");          //--->['H','e','l','l','o']
variable.substring(2,4);     //--->ll
variable.toLowerCase();      //--->hello
variable.toUpperCase();      //--->HELLO
variable.trim();             //--->Hello
variable.trimStart();        //--->"Hello "
variable.trimEnd();          //--->" Hello" 
