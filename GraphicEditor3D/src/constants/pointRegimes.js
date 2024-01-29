import PointRegime from "../entities/PointRegime";

/** Режимы работы точек */
const pointRegimes = {
  standart: new PointRegime(4, "#24adf3", 0, "#ffffff"), // Стандартный
  backlit: new PointRegime(5, "#ef5c5d", 0, "#ffffff"), // Подсвеченная (при наведении)
  added: new PointRegime(4, "#ffffff", 2, "#219d56"), // При добавлении точки
  addedStick: new PointRegime(5, "#ffffff", 0, "#ffffff"), // Первая выбранная точка при добавлении линии
  group: new PointRegime(4, "#fefefe", 2, "#e8ac30"), // В группе
  moving: new PointRegime(5, "#ec3e41", 0, "#ffffff"), // В группе при перемещении
  rotation: new PointRegime(5, "#ec3e41", 0, "#ffffff"), // В группе при вращении
  transform: new PointRegime(5, "#ec3e41", 0, "#ffffff"), // В группе при трансформировании
  transformFrame: new PointRegime(4, "#ffe65c", 0, "#ffffff"), // У рамки при трансформировании
};

export default pointRegimes;
