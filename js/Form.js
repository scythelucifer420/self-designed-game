class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
   // this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    //this.titleImg.position(width/2-250, 25);
    this.input.position(width / 2 - 110, height / 2 - 8);
    this.playButton.position(width / 2 - 90, height / 2 + 45);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
   // this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
   // this.titleImg.size(500,500)
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
