import StickRegime from "../entities/StickRegime";

/** Режимы работы линий */
const stickRegimes = {
  standart: new StickRegime("#b3b8bf", 2, null), // Стандартный
  backlit: new StickRegime("#ef5c5d", 3, null), // Подсвеченная (при наведении)
  addedPointFrame: new StickRegime("#219d56", 2, []), // У рамки при добавлении точки
  turningAxes: new StickRegime("#5662f6", 4, null), // У оси при вращении
  transform: new StickRegime("#ffe65c", 2, null), // У рамки при трансформировании
  frontX: new StickRegime("#ef7482", 2, null), // Передний у оси X
  frontY: new StickRegime("#cedb71", 2, null), // Передний у оси Y
  frontZ: new StickRegime("#4dd2c5", 2, null), // Передний у оси Z
  backX: new StickRegime("#ef7482", 2, [10, 3]), // Задний у оси X
  backY: new StickRegime("#cedb71", 2, [10, 3]), // Задний у оси Y
  backZ: new StickRegime("#4dd2c5", 2, [10, 3]), // Задний у оси Z
};

export default stickRegimes;
