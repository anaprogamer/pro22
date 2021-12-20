var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var sininho, imgfada,vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgfada = loadImage("images/fairyImage1.png");
    vozFada = loadSound ("sound/joyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    sininho= createSprite(400,300);
    sininho.addImage(imgfada);

    sininhoBody = Bodies.rectanglu (650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, sininhoBody);


    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function Draw() { 
    
    if (star.y >470 && starBody.posicion.y > 470 ){
        Matter.Body.setStatic(star.Body, true);

    }

}