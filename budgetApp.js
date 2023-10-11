var budgetController = (function () {
    var x = 23;

    var add = function (a) {
        return x + a
    }

    return {
        publicTest: function (b) {
            return add(b)
        }
    }
})()

var UIController = (function () {
    //Some Code
})()

var controller = (function (budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(10)
    return {
        another: function(){
            return z
        }
    }
})(budgetController, UIController)

















// var budgetController = (function(){
//     var x = 23;

//     var add = function(a){
//         return x + a
//     }

//     return{
//         publicTest: function(b){
//             return add(b)
//         }
//     }
// })()


// var UIController = (function(){
//     //Some Code
// })()


// var controller = (function(budgetCtrl, UICtrl){
// var z = budgetCtrl.publicTest(5)
// return {
//     anotherPublic: function(){
//         return z
//     }
// }
// })(budgetController, UIController)


