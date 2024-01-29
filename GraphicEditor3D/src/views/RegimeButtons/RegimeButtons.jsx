import React from "react";
import regimes from "../../constants/regimes";
import Delimiter from "../Delimiter/Delimiter";
import RegimeButton from "../RegimeButton/RegimeButton";
import convertToText from "../../functions/convertToText";
import downloadFile from "../../functions/downloadFile";
import readFile from "../../functions/readFile";
import convertFromText from "../../functions/convertFromText";

/** Кнопки с режимами работы */
const RegimeButtons = ({
  regime,
  regimeChange,
  points,
  pointsChange,
  sticks,
  sticksChange,
  reset,
  height,
  padding,
}) => {
  const delimiter = "delimiter";
  const drawRegimes = [
    {
      title: "Вращать сцену",
      image: "images/TotalRotation.png",
      disabled: regime === regimes.totalRotation,
      onClick: () => regimeChange(regimes.totalRotation),
    },
    {
      title: "Добавить точку",
      image: "images/AddPoint.png",
      disabled: regime === regimes.addPoint,
      onClick: () => regimeChange(regimes.addPoint),
    },
    {
      title: "Добавить линию",
      image: "images/AddLine.png",
      disabled: regime === regimes.addStick,
      onClick: () => regimeChange(regimes.addStick),
    },
    {
      title: "Удалить элемент",
      image: "images/Delete.png",
      disabled: regime === regimes.delete,
      onClick: () => regimeChange(regimes.delete),
    },
    {
      title: "Группировать",
      image: "images/Group.png",
      disabled: regime === regimes.group,
      onClick: () => regimeChange(regimes.group),
    },
    {
      title: "Перемещение группы",
      image: "images/GroupMoving.png",
      disabled: regime === regimes.groupMoving,
      onClick: () => regimeChange(regimes.groupMoving),
    },
    {
      title: "Вращение группы",
      image: "images/GroupRotation.png",
      disabled: regime === regimes.groupRotation,
      onClick: () => regimeChange(regimes.groupRotation),
    },
    {
      title: "Трансформирование группы",
      image: "images/GroupTransform.png",
      disabled: regime === regimes.groupTransform,
      onClick: () => regimeChange(regimes.groupTransform),
    },
    delimiter,
    {
      title: "Скачать файл",
      image: "images/Export.png",
      disabled: false,
      onClick: () => {
        let text = convertToText(points, sticks);
        downloadFile(text, "model.txt");
      },
    },
    {
      title: "Открыть модель из файла",
      image: "images/Import.png",
      disabled: false,
      onClick: () => {
        readFile((t, n) => {
          const [p, s] = convertFromText(t);
          pointsChange(p);
          sticksChange(s);
        });
      },
    },
    {
      title: "Очистить",
      image: "images/ClearAll.png",
      disabled: false,
      onClick: () => reset(),
    },
  ];

  return drawRegimes.map((drawRegime, index) =>
    drawRegime === delimiter ? (
      <Delimiter key={index} />
    ) : (
      <RegimeButton
        key={index}
        title={drawRegime.title}
        image={drawRegime.image}
        size={height - 2 * padding}
        disabled={drawRegime.disabled}
        onClick={drawRegime.onClick}
      />
    )
  );
};

export default RegimeButtons;
