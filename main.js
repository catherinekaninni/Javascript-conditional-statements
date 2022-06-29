// // Write a JavaScript program which iterates the integers from 1 to 100. But for
// // multiples of three print "Fizz" instead of the number and for the multiples of five print
// // "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
for (var i =1; i<=100; i++){
    if (i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}

// // Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum=0;
for(var x=0; x < 1000; x++)
{
    if (x%3==0 || x%5==0)
    {
        sum+=x;
    }
}
console.log(sum);

// // Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// // check if the current number is odd or even, and display a message to the screen.
// // Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (var x=0; x<=20; x++){
    if (x==0){
        console.log(x + " ","is even");
    }
    else if (x%2==0){
        console.log(x + " ","is even");
    }
    else{
        console.log(x + " ","is odd");
    }
}
// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
let num = [-2, 4,-5, 6,0]
largest=0
for(let i=0;i<num.length;i++){
    if(largest<num[i]){
        largest=num[i]
    }
}
console.log(largest)

// // Using conditional statements, write a JavaScript program to find the largest of the
// // following two numbers: 10 & 40
if(40>10){
    console.log("40 is greater than 10")
}
else{
    console.log("10 is greater than 40")
}

// // Write a JavaScript program to find leap years from 2000 to 2022
for(i = 2000;i<=2022;i++){
    if (i%4!=0 && i%400!=0){
        console.log(`${i} is not a leap year`);
    }
    else{
        console.log(`${i} is a leap year`)
    }
}

