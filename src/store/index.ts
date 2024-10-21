import { proxy } from "valtio";

interface State {
  windowColor: string;
  silverColor: string;
  plasticColor: string;
  rubberColor: string;
  paintColor: string;
}

const state: State = proxy({
  windowColor: "black",
  silverColor: "black",
  plasticColor: "black",
  rubberColor: "black",
  paintColor: "black",
});

export default state;
