

class Dogs{

    allDogsBark():void{
        console.log('All Dogs bark')
    }
}
class Puppy extends Dogs{
      
    childofDog():void{
        console.log('Child of Dog is called Puppy')
        
    }
}

class Legs extends Dogs{

    everyDogHasFourLegs():void{
        console.log('Every Dog Has 4 legs')
    }
}

class Ears extends Dogs{

       everyDogHastwoEars():void{
        console.log('Every Dog Has 2 ears)')

       }
}

const d = new Dogs()
d.allDogsBark()


const p = new Puppy()
p.childofDog()








