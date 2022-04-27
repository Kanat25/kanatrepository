function twoMassive(array1,array2) {

    if (array1.length > array2.length){
        console.log("массив 1 длиннее массива 2");

    } else if (array1.length === array2.length) {
        console.log("массивы одинаковы");

    } else {
        console.log("массив 2 больше");
    }
}
twoMassive([3, 3], [2,4,5])
