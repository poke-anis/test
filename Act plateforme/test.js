var coffre = [50,60,8,32,21,5,5,5];
var tmp;

function BubbleSort(){
    for (let i = 0; i < coffre.length-1; i++) {
        
        for (let j = 0; j < coffre.length-i-1; j++) {
            if (coffre[j]> coffre[j+1]) {
                tmp = coffre[j]
                coffre[j]=coffre[j+1]
                coffre[j+1] = tmp
            }

        }

    }
}

BubbleSort()
/*Quick Sorting*/

function Quick_Sorting(){
    for (let i = 0; i < coffre.length/2; i++) {
        var coffre1= array[i];
        
    }
}


var comp=0
function nmbdiv(arr){
    while ( arr/2 >= 1) {
        comp += 1
        arr = arr/2
    }
}

nmbdiv(coffre.length)
console.log(comp)



BEGIN
    Arr :={2,4,1,9,3}
    FOR i FROM 0 TO arr.length-1 STEP 1  DO
        FOR j FROM 0 TO i STEP 1  DO
            IF ( Arr[i+1] < Arr[i-j]) THEN
                tmp = Arr[i+1]
                Arr[i+1] = Arr[i]
                Arr[i] = tmp
                IF ( i > 0) THEN
                    i= i-1
                        j=0
                    END_IF
                END_IF
            END_IF
    END_FOR
END