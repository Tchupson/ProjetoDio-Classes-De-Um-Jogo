class Hero {
    
    Pegar() {
    this.nome = prompt("Teu nome?");
    this.idade = prompt("Sua idade?");
   
    while(isNaN(this.idade)) {
      this.idade = prompt("Idade inválida. Por favor, insira sua idade novamente:");
    }
    this.classe = prompt("Sua Classe? (Ex: Guerreiro, Mago, Monge, Ninja)");
    while(this.classe != "Guerreiro" && this.classe != "Mago" && this.classe != "Monge" && this.classe != "Ninja"){
         this.classe = prompt("Sua Classe? Capitalize a primeira letra. (Ex: Guerreiro, Mago, Monge, Ninja.)");
    }

 
 }
  Atacar(){
     if(this.classe === "Mago"){
         this.ataque = "Magia";
         
     }else
     if(this.classe === "Monge"){
         this.ataque = "Artes marciais";
     }else
     if(this.classe === "Ninja"){
         this.ataque = "shuriken";
     }else
     if(this.classe === "Guerreiro"){
         this.ataque = "Espada";
     }
     
     if(this.ataque != null){
      ;
        
         console.log(`${this.classe} atacou usando ${this.ataque}`);
        this.idade += 1;
       // console.log(`Seu ${this.classe} envelheceu com sua luta ele agora tem ${this.idade} anos`);
        
         
     }
  }
}



const meuHero = new Hero();
meuHero.Pegar();
meuHero.Atacar();

    

