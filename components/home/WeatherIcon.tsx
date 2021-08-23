import React from "react";
import { determineIcon } from "../Utils";

interface FormProps {
  stateOfWeather: string;
  idOfWeather: number;
  day: boolean;
}

function LeftComponent({ idOfWeather, day, stateOfWeather }: FormProps) {
  return (
    <div className="flex flex-col text-center">
      {determineIcon(idOfWeather, day, 'h-16 w-16')}
      <div>{stateOfWeather}</div>
    </div>
  );
}

export default LeftComponent;
