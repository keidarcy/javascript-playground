package main

import "fmt"


func testMap() {
    m := make(map[string]int)
    m["hello"] = 1
    m["world"] = 2
    m["john"] = 3
    m["john"] = 3
    fmt.Println(m["no"])
    key := "hello"
    if v,ok := m[key]; ok {
	fmt.Println(key, v)
    }


}

func main() {
    testMap()
}
