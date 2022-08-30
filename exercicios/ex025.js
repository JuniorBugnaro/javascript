let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engrodar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engrodar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)