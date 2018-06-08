var nums = [2,5,2,1,2,4,5,1,2,232323,45,7,2,1]

function add(array){
    return array.reduce((acc,num) => num + acc)
}

add(nums)