import React, { useEffect, useState } from "react";
import DrawPoints from "../DrawPoints/DrawPoints";
import Point from "../../entities/Point";
import pointRegimes from "../../constants/pointRegimes";
import DrawSticks from "../DrawSticks/DrawSticks";
import Transformer from "../../functions/Transformer";
import Stick from "../../entities/Stick";
import stickRegimes from "../../constants/stickRegimes";

const DrawTransformation = ({ baseCords, points, cords, params }) => {
  const [newPoints, newPointsChange] = useState([]);
  const [framePoints, framePointsChange] = useState([]);
  const [frameSticks, frameSticksChange] = useState([]);

  useEffect(() => {
    let p = [
      new Point(cords.minx, cords.miny, cords.minz, pointRegimes.transformFrame),
      new Point(cords.minx, cords.miny, cords.maxz, pointRegimes.transformFrame),
      new Point(cords.minx, cords.maxy, cords.minz, pointRegimes.transformFrame),
      new Point(cords.minx, cords.maxy, cords.maxz, pointRegimes.transformFrame),
      new Point(cords.maxx, cords.miny, cords.minz, pointRegimes.transformFrame),
      new Point(cords.maxx, cords.miny, cords.maxz, pointRegimes.transformFrame),
      new Point(cords.maxx, cords.maxy, cords.minz, pointRegimes.transformFrame),
      new Point(cords.maxx, cords.maxy, cords.maxz, pointRegimes.transformFrame),
    ];
    let s = [
      new Stick(p[0], p[1], stickRegimes.transform),
      new Stick(p[0], p[2], stickRegimes.transform),
      new Stick(p[0], p[4], stickRegimes.transform),
      new Stick(p[1], p[3], stickRegimes.transform),
      new Stick(p[1], p[5], stickRegimes.transform),
      new Stick(p[2], p[3], stickRegimes.transform),
      new Stick(p[2], p[6], stickRegimes.transform),
      new Stick(p[3], p[7], stickRegimes.transform),
      new Stick(p[4], p[5], stickRegimes.transform),
      new Stick(p[4], p[6], stickRegimes.transform),
      new Stick(p[5], p[7], stickRegimes.transform),
      new Stick(p[6], p[7], stickRegimes.transform),
    ];
    const tr = new Transformer(cords, baseCords);
    const newPoints = points.map(
      (point) =>
        new Point(
          tr.x(point.x),
          tr.y(point.y),
          tr.z(point.z),
          pointRegimes.transform
        )
    );

    framePointsChange(p);
    frameSticksChange(s);
    newPointsChange(newPoints);
  }, [cords]);

  return (
    <>
      <DrawSticks sticks={frameSticks} params={params} />
      <DrawPoints points={framePoints} params={params} />
      <DrawPoints points={newPoints} params={params} />
    </>
  );
};

export default DrawTransformation;
