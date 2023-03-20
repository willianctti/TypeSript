let x: number = 10

x = 20;
console.log(x);

const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)

myNumbers.push(4)


let myTuple: [number, string, string[]]

myTuple = [5,"teste", ["a", "b"]]
console.log(myTuple)


const user: {name: string, age: number} = {
	name: "Willian",
	age: 18,
}

console.log(user)





let id: string | number = "10"
id = 200

console.log(id)

// type alias

type myIdType = number | string

let userId: myIdType = 10
userId = "alex"

console.log(userId)




enum Size {
	p = "pequeno",
	m = "medio",
	g = "grande"	

}


const camisa = {
	name: "Polo",
	size: Size.g
}

console.log(camisa)




// Funções



function sum(a: number, b: number) {
	return a + b
}

console.log(sum(12, 12))





function logger(msg: string): void {
	console.log(msg)
}

logger("teste")






interface MathFunctionParams {
	n1: number,
	n2: number
}

function sumNumbers(nums: MathFunctionParams) {
	return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1 , n2:2}))





function multiplyNumbers(nums: MathFunctionParams) {
	return nums.n1 * nums.n2
}


// também posso tipar uma variavel com isso:

const someNumbers: MathFunctionParams = {
	n1: 5,
	n2: 10
}

console.log(multiplyNumbers(someNumbers));







function showArraysItens<T>(arr: T[]) {
	arr.forEach((item) => {
	console.log(`Item: ${item}`)	
	})
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArraysItens(a1)
showArraysItens(a2)





class User {
	name
	role
	isApproved


	constructor(name: string, role: string, isApproved: boolean) {
		this.name = name
		this.role = role
		this.isApproved = isApproved
	}
}

const zeca = new User("Zeca", "Admin", true)

console.log(zeca)