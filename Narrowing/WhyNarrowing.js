function padLeft(padding) {
    //padding has a union type
    //Here, padding could be both number as well as string
    //But, since both the indiviual types have different properties. Hence,
    //It is important to use the properties for specific types only
    //if padding is a number, then this function can be called on a number
    //   console.log(-(padding))
    console.log(padding.toLowerCase()); //When called with number, this will not work 
    //Property 'toLowerCase' does not exist on type 'string | number'.
    //Property 'toLowerCase' does not exist on type 'number'.
}
// padLeft(10)
padLeft("Hello World");
