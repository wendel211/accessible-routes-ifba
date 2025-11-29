import React from "react";
import { Circle, Text } from "react-native-svg";

export default function NodeMarker({ x, y, label }) {
  return (
    <>
      <Circle
        cx={x}
        cy={y}
        r={10}
        fill="#1F8E46"
        stroke="#000"
        strokeWidth={1.5}
      />

      <Text
        x={x}
        y={y - 16}
        fontSize="11"
        fill="#000"
        textAnchor="middle"
        fontWeight="bold"
      >
        {label}
      </Text>
    </>
  );
}
