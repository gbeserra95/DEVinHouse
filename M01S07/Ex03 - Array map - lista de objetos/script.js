const list = [
    { id: 1, cliente: "João Celso de Souza", idade: 33 },
    { id: 2, cliente: "Claudia Cipriano", idade: 28 },
    { id: 3, cliente: "Edilene Souza Silva", idade: 41 },
    { id: 4, cliente: "Maurício Gomes", idade: 17 },
    { id: 5, cliente: "Claudia Cipriano", idade: 22 }
]

const newList = list.map((obj) => {
    obj.ativo = true
})

console.log(list)
console.log(newList)