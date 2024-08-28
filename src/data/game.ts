export interface Ship {
    x:number,
    y:number,
    velocity:number,
    isAlive:boolean
}

export interface Bullet {
    x : number,
    y : number,
    spriteX : number,
    spriteY : number,
    used : boolean
}

export interface Explosion {
    x : number,
    y : number,
    monterSpriteX : number,
    monterSpriteY : number,
    frame : number,
}

export interface Monster {
    id : number,
    name : string,
    x : number,
    y : number,
    spriteX : number,
    spriteY : number,
    points : number,
    divePoints : number,
    life: number,
    diveMode : boolean,
    alive : boolean
}

export interface MonsterBullet {
    x : number,
    y : number,
    spriteX : number,
    spriteY : number,
    initialX : number,
    initialY : number,
    shipXPosition: number,
    shipYPosition: number,
    used : boolean
}

export interface Medal {
    value : number,
    xPosition : number,
    spriteWidth : number,
}

// Bee: In formation	50
// Bee: Diving	100
// Butterfly: In formation	80
// Butterfly: Diving	160
// Boss Galaga: In formation	150
// Boss Galaga: Diving alone	400
// Boss Galaga: Diving with 1 escort	800
// Boss Galaga: Diving with 2 escorts	1600
// Captured fighter	1000
// 1 group of enemies in 1st and 2nd Challenging Stages	1000
// 1 group of enemies in 3rd and 4th Challenging Stages	1500
// 1 group of enemies in 5th and 6th Challenging Stages	2000
// 1 group of enemies in 7th and subsequent Challenging Stages	3000
// Any transform individually	160
// All scorpions	1000
// All Bosconian ships	2000
// All Galaxian Flagships	3000

//Las posiciones del sprite depende de la foto
export const monsterSpects:Monster[] = [
    {   
        id : 0,
        name : "Bee",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 5,
        points : 50,
        divePoints : 100,
        diveMode : true,
        life : 1,
        alive : true 
    },
    {   
        id : 1,
        name : "Buterfly",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 4,
        points : 80,
        divePoints : 180,
        diveMode : true,
        life : 1,
        alive : true 
    },
    {   
        id : 2,
        name : "Galaga",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 2,
        points : 150,
        divePoints : 400,
        diveMode : true,
        life : 2,
        alive : true 
    },
    {   
        id : 3,
        name : "Scorpion",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 6,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
    {   
        id : 4,
        name : "Bosconian",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 7,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
    {   
        id : 4,
        name : "Galaxian",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 8,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
    {   
        id : 5,
        name : "Dragonfly",
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 9,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
    { 
        id : 6,
        name : "Satellite",  
        x : 110,
        y : 100,
        spriteX : 0,
        spriteY : 11,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
    { 
        id : 7,
        name : "Enterprise",  
        x : 110,
        y : 100,
        spriteX : 6,
        spriteY : 10,
        points : 160,
        divePoints : 160,
        diveMode : true,
        life : 1,
        alive : true 
    },
]

export const medalsSpects:Medal[] = [
    {
        value : 50,
        xPosition : 93,
        spriteWidth : 15,
    },
    {
        value : 30,
        xPosition : 75,
        spriteWidth : 15,
    },
    {
        value : 20,
        xPosition : 57,
        spriteWidth : 15,
    },
    {
        value : 10,
        xPosition : 39,
        spriteWidth : 15,
    },
    {
        value : 5,
        xPosition : 29,
        spriteWidth : 7,
    },
    {
        value : 1,
        xPosition : 19,
        spriteWidth : 7,
    },
]