export function solution (arr) {


    return arr
        .map(function (e) {
            return e
        })
        .filter(function (e) {
            return e.afiliate
        })
        .reduce(function (acc, e){
            return acc + ", " + e.name;
        })

}