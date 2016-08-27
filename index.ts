interface Gun {
    bullets: number;
    type?: "auto" | "cats"
}

class Robot {
    greeting: string;
    constructor (greet: string) {
        this.greeting = greet;
    }

    public say() {
        console.log(this.greeting);
    }

    public shoot(gun: Gun) {
        gun.bullets;
        console.log("SPLAT");
    }
}

class RobotGun {
    constructor (public bullets: number, public type: "auto" | "cats") {
 
    }
}

var meat = new Robot("plz daddy not the whip");
meat.say();
meat.shoot(new RobotGun(50, "cats"));
console.log("whereamI");