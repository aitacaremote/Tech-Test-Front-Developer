import { Validators } from "@angular/forms";

export const menuOptions = [
  { path: "/home", label: "Explorar" },
  { path: "/clothes/addclothes", label: "Añadir prenda" },
  { path: "/clothes/all", label: "Todas las prendas" },
];

export const clothesFormEmpty = {
  name: ["", [Validators.required]],
  type: ["", [Validators.required]],
  color: ["", [Validators.required]],
  size: ["", [Validators.required]],
  price: ["", [Validators.required]],
};
