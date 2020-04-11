package main

import "fmt"


func testArray() {
    var arrayInt64 [3]int64
    arrayInt64[0], arrayInt64[1], arrayInt64[2] = 0, 1, 2
    fmt.Println(arrayInt64)

    arrayString := []string{"hello", "go"}
    fmt.Println(arrayString)

    arrayFloat := [...]float64{1.0, 2.2, 3}
    fmt.Println(arrayFloat)

    matrix := [2][2]int64 {
	{0, 1},
	{2, 3},
    }
    fmt.Println(matrix)
}

func testSlice() {

    //ints := make([]int, 3)
    //ints[0], ints[1] = 1, 2
    //names := []string{"li", "x", "z", "zhao"}
    //names2 := names[0:3]
    //fmt.Println(names, len(names), cap(names), ints, cap(ints))
    //fmt.Println(names2)
    //for idx, name := range names {
	//fmt.Println(idx, name)
    //}

    vals := make([]int, 0)
    for i:=0; i<3; i++ {
	vals = append(vals, i)
	fmt.Println(vals, lvals), cap(vals))
    }
    //vals2 := []int{3,4,5}
    //newVar := append(vals, vals2...)
    //fmt.Println(newVar)

}
func main() {
    testSlice()
}
