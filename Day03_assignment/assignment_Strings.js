let len = (s) => { 
   let arr = s.split(" ");
   console.log(arr);
   let s1 = arr[arr.length-1].length;
   return s1;
}
   
console.log("Length of last word is " + len("Hello World"));

let len1 = (a) => 
    {
        let arr = a.trim().split(/\s+/);
        console.log(arr);
        let s2 = arr[arr.length-1].length;
        return s2;
}
console.log("Length of last word is " + len1(" fly me  to the moon "));


let isAnagram = (str1, str2) =>
{
    let s1 = str1.trim().toLowerCase().split("").sort().join("");
    let s2 = str2.trim().toLowerCase().split("").sort().join("");
    return s1 === s2;    
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));

