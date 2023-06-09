class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.audio('select', "soundscmpm120.wav")
        this.load.image("woogywoogaming", "woogywoogaming.png")
        this.load.audio('thepyre', 'ThePyre.wav');
        this.load.image("ThreadsofFate", "ThreadsofFate.png") 
        this.load.image("westernnations", "westernnations.png")
        this.load.image("parchment", "parchment.png")
        this.load.image("alder", "alder.png") 
        this.load.image("ib", "ib.png")
        this.load.image("kizo", "kizo.png")
        this.load.image("ragash", "ragash.png")
        this.load.image("viktor", "viktor.png")
    }
    create() {
    // center the text to the middle of the screen. code from https://www.stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let selectsound = this.sound.add('select')
        this.add.text(screenCenterX, screenCenterY, 'Click to begin.').setOrigin(0.5);
        this.input.on('pointerdown', () => {
            selectsound.play();
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('logoscene'));
        });
    }
}

class LogoScene extends Phaser.Scene {
    constructor() {
        super('logoscene');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let gamign = this.add.text(screenCenterX, screenCenterY + 160, 'woogywoo gaming', {fontSize: 30}).setOrigin(0.5);
        gamign.setTint(0x000000)
        let maintheme = this.sound.add('thepyre');
        maintheme.play();
        this.imageObject = this.add.image(
        530,
        300,
        "woogywoogaming",
        // added timer. code from https://www.thepolyglotdeveloper.com/2020/09/switch-between-scenes-phaser-game/
        this.time.addEvent({
        delay: 2000,
        loop: false,
        callback: () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
        }
    })
    )
    this.time.delayedCall(4000, () => this.scene.start('mainmenu'));
    }
}

class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenu');
    }
    create() {
        let selectsound = this.sound.add('select')
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.imageObject = this.add.image(
        93,
        100,
        "ThreadsofFate",
    )
        this.imageObject.setScale(0.55)

        this.imageObject = this.add.image(
        615,
        320,
        "westernnations",
    )
        this.imageObject.setScale(0.42)

        this.add.text(20, 150, 'Continue');
        this.add.text(20, 200, "New Game");
        this.add.text(20, 250, "Load Game");
        this.add.text(20, 300, "Options");
        this.input.on('pointerdown', () => {
            selectsound.play();
            this.cameras.main.fadeOut(2000, 0,0,0);
            this.time.delayedCall(3000, () => this.scene.start('prologue'));
        });
    }
}
class Prologue extends Phaser.Scene {
    constructor() {
        super('prologue');
    }
    create() {
        let selectsound = this.sound.add('select')
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.imageObject = this.add.image(
            1024/2,
            320,
            "parchment",
    )
        let titlepog = this.add.text(390, 50, "The State of the World", {fontSize: 25});
        titlepog.setTint(0x000000)
        this.imageObject.setScale(3.30)
        let box = this.add.text(25, 100,
`A new era has begun. One of peace. For 100 long years, the people of Ingolfheim have warred against each other, spilling blood over resources, money, and land. This brutal, bloody conquest culminated in the loss of innumerable casualties. With devastating losses on all sides, the war came to a standstill, and the four countries entered a tentative and tense standoff. However, this all changed when the new Regent Lord of the Dynasty, Elduin Ulahana, held a summit with King Edward Pathage III, ending the war. 

The cheers of hundreds of thousands of people flooded the continent. It was finally over. Now officially known as The Western Nations, the people of this new alliance rejoice at the prospect of a peaceful era after a generation of misery. However, evil lurks deep beneath the surface, waiting to strike at any moment. One such individual plans his rise to power, and will stop at nothing to achieve his goals. Peace is a mistake. A mistake that must be corrected.

…However, this is not his story. Nestled in the Greenslade Woods lies the quaint town of Garen’s Well. Created roughly 60 years ago, the town was founded as a checkpoint during the Kingdom’s march onto Sovereignty territory. Now, Garen’s Well is a bustling safe haven for all walks of life. More importantly, the first annual Festival of Flowers is being held in this very town to rejoice the end of the long campaign of war! It is in this town, where five individuals, all hailing from different parts of the continent, will meet. Today, their destinies merge. This is their story.
`, {fontSize: 20}
        );
        box.setTint(0x000000)
        box.setWordWrapWidth(1000);
        this.add.rectangle(912, 600, 150, 50, 0xffaf7a);
        let beginpog = this.add.text (878, 590, "Continue")
        beginpog.setTint(0x000000)
        this.input.on('pointerdown', () => {
            selectsound.play();
            this.cameras.main.fadeOut(2000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('choosecharacter'));
        });
    }
}

class ChooseCharacter extends Phaser.Scene {
    constructor() {
        super('choosecharacter');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        let kizo = this.imageObject = this.add.image(112, 300, "kizo")
        this.imageObject.setScale(0.25)

        let viktor = this.imageObject = this.add.image(312, 300, "viktor")
        this.imageObject.setScale(0.30)

        let ragash = this.imageObject = this.add.image(512, 300, "ragash")
        this.imageObject.setScale(0.30)

        let alder = this.imageObject = this.add.image(712, 300, "alder")
        this.imageObject.setScale(0.30)

        let ib = this.imageObject = this.add.image(912, 300, "ib")
        this.imageObject.setScale(0.40)

        let meetTheCast = this.add.text (427, 120, "Meet the Cast", {fontSize: 25})
        meetTheCast.setTint(0x000000)

        let endpog = this.add.rectangle(1025, 500, 150, 50, 0xd8bfd8);
        let beginpog = this.add.text (1025, 490, "The End")
        beginpog.setTint(0x000000)

        this.add.tween({
            targets: endpog,
            x: 512,
            ease: 'power3',
            duration: 2000
        })

        this.add.tween({
            targets: beginpog,
            x: 482,
            ease: 'power3',
            duration: 2000
        })
    }
}

new Phaser.Game({
    width: 1024,
    height: 640,
    backgroundColor: 0x8e7cc3,
    scene: [Intro, LogoScene, MainMenu, Prologue, ChooseCharacter],
});