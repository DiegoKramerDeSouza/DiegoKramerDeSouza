
(function(){
    "use strict";

    // FUNCTION EXPRESSIONS =============================================================================
    function createBicyclePrototye (){
        return {
            speed: 0,
            applyBrake: function(applyBrake){
                this.speed -= applyBrake;
                if(this.speed < 0) this.speed = 0;
                console.log('Breaking ' + applyBrake + ' current speed: ' + this.speed);
            },
            speedup: function(speedup){
                this.speed += speedup;
                console.log('Speed up ' + speedup + ' current speed: ' + this.speed);
            }
        }
    }

    function createMountainBikeProtoype(prototype){
        let newobj = Object.create(prototype);
        newobj.gear = 1;
        newobj.setgear = function(gear){
            this.gear = gear;
            console.log('Set gear ' + gear);
        };
        return newobj;
    }

    function start(){
        let bicycle = createMountainBikeProtoype(createBicyclePrototye());
        document.querySelector('#expressions').innerHTML += 'Start speed ' + bicycle.speed + '<br />';
        bicycle.speedup(5);
        bicycle.speedup(10);
        bicycle.setgear(2);
        bicycle.speedup(10);
        bicycle.setgear(3);
        bicycle.speedup(15);
        bicycle.setgear(4);
        bicycle.applyBrake(25);
        bicycle.setgear(3);
        bicycle.applyBrake(10);
        document.querySelector('#expressions').innerHTML += 'Final speed ' + bicycle.speed + '<br />';
    }

    start();

    // ES6 CLASSES ========================================================================================

    class Bicycle {
        constructor(){
            this.speed = 0;
        }

        applyBrake(applyBrake){
            this.speed -= applyBrake;
            if(this.speed < 0) this.speed = 0;
            console.log('Breaking ' + applyBrake + ' current speed: ' + this.speed);
        }
        speedup(speedup){
            this.speed += speedup;
            console.log('Speed up ' + speedup + ' current speed: ' + this.speed);
        }
    }

    class MountainBike extends Bicycle {
        
        constructor(){
            super();
            this.gear = 1;
        }
        
        setgear(gear){
            this.gear = gear;
            console.log('Set gear ' + gear);
        }

    }

    function classStart(){
        let bicycle = new MountainBike();
        document.querySelector('#classes').innerHTML += 'Start speed ' + bicycle.speed + '<br />';
        bicycle.speedup(7);
        bicycle.speedup(18);
        bicycle.setgear(2);
        bicycle.speedup(9);
        bicycle.setgear(3);
        bicycle.speedup(7);
        bicycle.setgear(4);
        bicycle.applyBrake(12);
        bicycle.setgear(3);
        bicycle.applyBrake(15);
        document.querySelector('#classes').innerHTML += 'Final speed ' + bicycle.speed + '<br />';
    }

    classStart();

})();


