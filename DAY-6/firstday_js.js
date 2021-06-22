
//question 1
function is_array(input){
    ans=Array.isArray(input);
    return ans;
}
console.log(is_array([1,2,4,0]));
console.log(is_array('w3resource'));


//question 2
function array_Clone(Array){
    const ans= Array;
    return ans;

}
console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));


//question 4
var myColor=["Red","Green","White","Black"];
var joinit=myColor.join();
console.log(joinit);
var joinit=myColor.join(",");
console.log(joinit);
var joinit=myColor.join("+");
console.log(joinit);

//question 5
var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var mf=1;
var m=0;
var item;
for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
        if(arr1[i]==arr1[j])
        m++;
        if(mf<m){
            mf=m;
            item=arr1[i];
        }
    }
    m=0;
}
console.log(item+"("+mf+"times )");
