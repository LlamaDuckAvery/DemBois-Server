var Robot = (function () {
    function Robot(greet) {
        this.greeting = greet;
    }
    Robot.prototype.say = function () {
        console.log(this.greeting);
    };
    Robot.prototype.shoot = function (gun) {
        gun.bullets;
        console.log("SPLAT");
    };
    return Robot;
}());
var RobotGun = (function () {
    function RobotGun(bullets, type) {
        this.bullets = bullets;
        this.type = type;
    }
    return RobotGun;
}());
var meat = new Robot("plz daddy not the whip");
meat.say();
meat.shoot(new RobotGun(50, "cats"));
console.log("whereamI");
