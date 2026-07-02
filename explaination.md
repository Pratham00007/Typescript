typescript is nothing just a like rules specifier
it gives type safety
typescript code coverted into js before execution 

intro
![alt text](image.png)
to get js fole of ts run tsc file.ts

L-4
![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

this is the safety ts provides
![alt text](image-4.png)

l5
![alt text](image-5.png)
there is no int and float only number

![alt text](image-6.png)

![alt text](image-7.png)

l6
![alt text](image-8.png)

when we are not sure about type of value then only use any its bad practice to use any everywhere

![alt text](image-9.png)

![alt text](image-10.png)
![alt text](image-11.png)

any is just to avoid typechecking 

![alt text](image-12.png)

l7
![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

l9

error due to non passing argument
![alt text]({C6873849-A7E5-40BF-B8BC-F81FC53A20C7}.png)

wired behaviour

![alt text](image-16.png)

now we can pass more argument

![alt text](image-17.png)

l10

type alias

![alt text](image-18.png)

like struct keyword in c we can degfine our own dataype like this and can use it
this is type alias

![alt text](image-19.png)

return type also user
![alt text](image-20.png)

l11 READONLY

made id ro so no one can alter
![alt text](image-21.png)
![alt text](image-23.png)

? to make optional parameter
![alt text](image-24.png)

![alt text](image-25.png)

![alt text](image-26.png)

l12 uniion type in ts

![alt text](image-27.png)
![alt text](image-28.png)

![alt text](image-29.png)

![alt text](image-30.png)

![ ](image-31.png)

![ ](image-32.png)

![alt text](image-33.png)

![alt text](image-34.png)

cant change
![alt text](image-35.png)

![alt text](image-36.png)

l13 tuples in ts

![alt text](image-37.png)

cant rearrange order
tuple make sure this
![alt text](image-38.png)

![alt text](image-39.png)

we can change value

![alt text](image-40.png)

array opr allowed even if disturb the rules of type
![alt text](image-41.png)

l 14 interfaces


![alt text](image-42.png)
![alt text](image-43.png)

![alt text](image-44.png)

![alt text](image-45.png)

l15  interfavce vs type

![alt text](image-46.png)

inheritence
![alt text](image-47.png)

![alt text](image-48.png)

l 16  public vs private

![alt text](image-49.png)

![alt text](image-50.png)
 instaed private in js we have# so to make name private -> #name

l17 getter and setter

 ![alt text](image-51.png)

 ![alt text](image-52.png)


seter has no return type 
 not even void
 ![alt text](image-53.png)

 private method

 ![alt text](image-54.png)

 ![alt text](image-55.png)
