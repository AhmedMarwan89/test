arr = [2,4,2,5,7,4,2,6,3,7,36,3 , 19,8]
arr.sort(function(a, b){return a - b})

// you should learn the binary research it's really cool
function binary_search(arr , variable)
{   
    arr.sort(function(a, b){return a - b})
    for ( i in arr)
    {
        console.log(arr)
        half = Math.floor((arr.length/2)-1)
        if (variable>arr[half])
        {
            arr = arr.slice(half,arr.length)
        }
        if (variable == arr[half])
        {
            return 'yes it is exist'
        }
        else 
        {
            arr=arr.slice(0,half)
            
        }


    }
    return 'there is no this item'

}
console.log(binary_search(arr ,36))

