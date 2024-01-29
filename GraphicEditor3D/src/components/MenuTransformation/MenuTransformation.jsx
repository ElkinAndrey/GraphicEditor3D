import React from "react";
import InputNumber from "../../views/InputNumber/InputNumber";
import Transformer from "../../functions/Transformer";
import Bold from "../../views/Bold/Bold";

const MenuTransformation = ({
  step,
  baseCords,
  cords,
  cordsChange,
  groupPoints,
  groupPointsChange,
  setTransformationCords,
}) => {
  const change = () => {
    const tr = new Transformer(cords, baseCords);
    for (const point of groupPoints) {
      point.x = tr.x(point.x);
      point.y = tr.y(point.y);
      point.z = tr.z(point.z);
    }
    groupPointsChange([...groupPoints]);
    setTransformationCords(groupPoints);
  };

  const mirror = (e) => {
    const value = e.target.value;
    if (value === "1")
      cordsChange({ ...cords, minx: cords.maxx, maxx: cords.minx });
    else if (value === "2")
      cordsChange({ ...cords, miny: cords.maxy, maxy: cords.miny });
    else if (value === "3")
      cordsChange({ ...cords, minz: cords.maxz, maxz: cords.minz });
    else if (value === "4")
      cordsChange({
        ...cords,
        minx: 2 * cords.maxx - cords.minx,
      });
    else if (value === "5")
      cordsChange({
        ...cords,
        miny: 2 * cords.maxy - cords.miny,
      });
    else if (value === "6")
      cordsChange({
        ...cords,
        minz: 2 * cords.maxz - cords.minz,
      });
    else if (value === "7")
      cordsChange({
        ...cords,
        maxx: 2 * cords.minx - cords.maxx,
      });
    else if (value === "8")
      cordsChange({
        ...cords,
        maxy: 2 * cords.miny - cords.maxy,
      });
    else if (value === "9")
      cordsChange({
        ...cords,
        maxz: 2 * cords.minz - cords.maxz,
      });
    else if (value === "10")
      cordsChange({ ...cords, minx: -cords.minx, maxx: -cords.maxx });
    else if (value === "11")
      cordsChange({ ...cords, miny: -cords.miny, maxy: -cords.maxy });
    else if (value === "12")
      cordsChange({ ...cords, minz: -cords.minz, maxz: -cords.maxz });
  };

  return (
    <div>
      <Bold>Трансформирование</Bold>
      <Bold>Минимальная стенка</Bold>
      <InputNumber
        step={step}
        value={cords.minx}
        valueChange={(x) => cordsChange({ ...cords, minx: x })}
        disabled={baseCords.maxx === baseCords.minx}
      />
      <InputNumber
        step={step}
        value={cords.miny}
        valueChange={(y) => cordsChange({ ...cords, miny: y })}
        disabled={baseCords.maxy === baseCords.miny}
      />
      <InputNumber
        step={step}
        value={cords.minz}
        valueChange={(z) => cordsChange({ ...cords, minz: z })}
        disabled={baseCords.maxz === baseCords.minz}
      />
      <Bold>Максимальная стенка</Bold>
      <InputNumber
        step={step}
        value={cords.maxx}
        valueChange={(x) => cordsChange({ ...cords, maxx: x })}
        disabled={baseCords.maxx === baseCords.minx}
      />
      <InputNumber
        step={step}
        value={cords.maxy}
        valueChange={(y) => cordsChange({ ...cords, maxy: y })}
        disabled={baseCords.maxy === baseCords.miny}
      />
      <InputNumber
        step={step}
        value={cords.maxz}
        valueChange={(z) => cordsChange({ ...cords, maxz: z })}
        disabled={baseCords.maxz === baseCords.minz}
      />
      <select onChange={mirror} value={"0"}>
        <option value="0" disabled>
          --Зеркалирование--
        </option>
        <option value="1">Перевернуть по X</option>
        <option value="2">Перевернуть по Y</option>
        <option value="3">Перевернуть по Z</option>
        <option value="4">Отзеркалить спереди по X</option>
        <option value="5">Отзеркалить спереди по Y</option>
        <option value="6">Отзеркалить спереди по Z</option>
        <option value="7">Отзеркалить сзади по X</option>
        <option value="8">Отзеркалить сзади по Y</option>
        <option value="9">Отзеркалить сзади по Z</option>
        <option value="10">Отзеркалить по оси X</option>
        <option value="11">Отзеркалить по оси Y</option>
        <option value="12">Отзеркалить по оси Z</option>
      </select>
      <button onClick={change}>Применить</button>
    </div>
  );
};

export default MenuTransformation;
