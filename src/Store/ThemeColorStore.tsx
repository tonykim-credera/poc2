import { makeAutoObservable } from "mobx";

class ThemeColorStore {
  themeColorClass = "light";
  checked = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleThemeColorSwitchClick = (color: string) => {
    // if (color === "gray") {
    //   this.themeColorClass = "white";
    // } else {
    //   this.themeColorClass = "gray";
    // }

    colorStore.themeColorClass = color;
    colorStore.checked = !this.checked;
  };
}

const colorStore = new ThemeColorStore();

export default colorStore;
