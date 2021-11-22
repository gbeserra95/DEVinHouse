# Let, var e const: quais são as suas diferenças?

## var

As variáveis **var** podem ser declaradas novamente e atualizadas.

```javascript
var cor = 'azul'
var cor = 'red' // alterando valor da variável
```

O fato de ela poder ser declarada dentro de seu próprio ou outros escopos cujo seu exterior já havia a declarado pode trazer diversos problemas lógicos e consequentemente bugs. Com isso, surgirar **let** e **const**.

## let

Variáveis **let** podem ser atualizadas mas não declaradas **no mesmo escopo**.

```javascript
let dizerOi = 'Oi'
let dizerOi = 'Oi, tudo bem?'
// error: Identifier 'dizerOi' has already been declared
```

```javascript
let dizerOi = 'Oi'

if (true) {
  let dizerOi = 'Oi, tudo bem?'
  console.lig(dizerOi) // "Oi, tudo bem?"
}
console.log(dizerOi) // "Oi"
```

Em resumo, utilizar **let** garante que variáveis globais ou de escopo superior não sejam sobrescritas em escopos menores. É uma medida que usamos para garantir a conformidade do código, pois não impactaremos os escopos superiores e funcionalidades já existentes.

## const

Constantes ou **const**s tem um comportamento similar ao let no que diz respeito a escopo. Sua diferença é que não pode ter seu valor alterado.

```javascript
const dizerOi = 'Oi'
diserOi = 'Oi, tudo bem?' // error: Assignment to constant variable.

const dizerOi = 'Oi'
const dizerOi = 'Oi, tudo bem?'
// error: Identifier 'dierOi' has already been declared
```

Apesar de **const** não poder ser sobrescrita ou declarada novamente. caso seja um objeto, suas propriedades podem ser alteradas.

# Classes, atributos e métodos

## Clases

**Class** é um _template_ que permite a criação de diversos objetos semelhantes, com as mesmas propriedades. Ele define o estado e o comportamento de um objeto implementando atributos (variáveis) e métodos (funções). Por convenção, as classes são escritas capitalizadas.

_Obs: o .this representa o objeto que é criado utilizando a classe (nesse caso, o cat)._

```javascript
class Animal {
  constructor(name, birthYear) {
    this.name = name
    this.birthYear = birthYear
  }

  calculateAge() {
    console.log(2021 - this.birthYear)
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }
}

const cat = new Animal('Burger', 2010)
cat.calculateAge() // 11
cat.greet // Hello, Burger!
```

## Atributos

**Atributos** são variáveis declaradas dentro do método _constructor_, que é um método que toda classe obrigatoriamente deve ter e é o primeiro a ser executado quando um objeto novo é criado com essa classe. São as variáveis que são passadas quando cria-se uma nova instância dessa classe, nesse caso, _name_ e _birthYear_.

## Métodos

**Métodos** são funções criadas dentro de uma classe. São escritos igual à uma função, sem precisar da palavra chave _function_ na frente. Podem receber parâmetros, printar informações, retornar dados, essencialmente tudo que uma função normal pode fazer.

Existem métodos **setters** (definir) e **getters** (obter). Um método e uma propriedade não podem ter o mesmo nome. Quando se usa o **get/set** antes do nome do método, é possível invocar ele como se fosse uma propriedade.

_Obs: mutação de dados é uma má prática e foi usado apenas como exemplo._

```javascript
class Animal {
  constructor(type) {
    this.type = type
  }

  get animalType() {
    return this.type
  }

  set newAnimalType(newAnimal) {
    this.name = newAnimal
  }

  static getClassName {
    return this.name
  }
}

const dog = new Animal('dog')
dog.animalType
dog.newAnimalType('cat')
Animal.getClassName // "Animal"
```
