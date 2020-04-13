package main

import "fmt"

func testStr() {
    var s string
    fmt.Println("i is ", i)
    fmt.Println("s is ", s)
    
    ii := 88
    ss := "hello go"
    fmt.Println("ii is ", ii)
    fmt.Println("ss is ", ss)
}

func testBool() {
    var b1 bool
    b2 := true
    b3 := false
    fmt.Println(b1, b2, b3)
}

func testNumber() {
    var i int64
    var i2 int32
    fmt.Println(i + int64(i2))
}

func main() {
    testNumber()
}

