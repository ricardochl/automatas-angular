import { Component, OnInit } from "@angular/core";
import {
  estadosA1,
  estadosA2,
  estadosA3,
  estadosA4,
  estadosA5
} from "./estados.enums";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public automata: string;
  public cadena: string;
  title = "Automatas";

  public cont: number = 0;
  public letra: any = "-";
  public estado: number = 0;
  public aceptacion: string = "";
  constructor() {}

  ngOnInit() {
    this.clear();
  }

  clear() {
    this.cont = 0;
    this.estado = 0;
    this.aceptacion = "";
  }

  nextLetra() {
    if (this.cont < this.cadena.length) {
      this.letra = this.cadena[this.cont];
      console.log("letra", this.letra);
      this.cont++;
    } else {
      this.letra = "-a";
      console.log("letra", this.letra);
    }
  }

  evaluate() {
    switch (this.automata) {
      case "automata1":
        this.automata1();
        break;
      case "automata2":
        this.automata2();
        break;
      case "automata3":
        this.automata3();
        break;
      case "automata4":
        this.automata4();
        break;
      case "automata5":
        this.automata5();
        break;
    }
  }

  automata1() {
    console.log("Running Automata1");
    this.clear();
    this.nextLetra();
    let i = 0;
    while (i <= 50) {
      i++;
      switch (this.estado) {
        case estadosA1.q0:
          if (this.letra === "a" && this.cadena[this.cont] === undefined) {
            this.estado = estadosA1.q2;
            this.nextLetra();
          } else if (this.letra === "a") {
            this.estado = estadosA1.q1;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA1.q1:
          if (this.letra === "b") {
            this.estado = estadosA1.q0;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA1.q2:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado q2!";
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
      }
    }
  }

  automata2() {
    console.log("Running Automata 2");
    this.clear();
    this.nextLetra();
    let i = 0;
    while (i <= 100) {
      i++;
      switch (this.estado) {
        case estadosA2.q0:
          if (this.letra === "a") {
            this.estado = estadosA2.q1;
            this.nextLetra();
          } else if (this.letra === "b") {
            this.estado = estadosA2.q1;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido q0";
            return this.aceptacion;
          }
        case estadosA2.q1:
          if (this.letra === "a") {
            console.log("fsdf");
            this.estado = estadosA2.q2;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido q1";
            return this.aceptacion;
          }
          break;
        case estadosA2.q2:
          if (this.letra === "b") {
            this.estado = estadosA2.q3;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido q2";
            return this.aceptacion;
          }
          break;
        case estadosA2.q3:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado !";
            return this.aceptacion;
          } else if (this.letra === "a") {
            this.estado = estadosA2.q3;
            this.nextLetra();
          }
          break;
      }
    }
  }

  automata3() {
    console.log("Running Automata3");
    this.clear();
    this.nextLetra();
    let i = 0;
    while (i <= 50) {
      i++;
      switch (this.estado) {
        case estadosA3.q0:
          if (this.letra === "1") {
            this.estado = estadosA3.q2;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q6;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q2:
          if (this.letra === "1") {
            this.estado = estadosA3.q3;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q6;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q3:
          if (this.letra === "0") {
            this.estado = estadosA3.q4;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q4:
          if (this.letra === "1") {
            this.estado = estadosA3.q3;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q5;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q5:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado q5!";
          } else if (this.letra === "1") {
            this.estado = estadosA3.q5;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q5;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q6:
          if (this.letra === "1") {
            this.estado = estadosA3.q2;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q7;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q7:
          if (this.letra === "1") {
            this.estado = estadosA3.q8;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q8;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q8:
          if (this.letra === "1") {
            this.estado = estadosA3.q9;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA3.q9:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado q9!";
          } else if (this.letra === "1") {
            this.estado = estadosA3.q9;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA3.q9;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
      }
    }
  }

  automata4() {
    console.log("Running Automata4");
    this.clear();
    this.nextLetra();
    let i = 0;
    while (i <= 50) {
      i++;
      switch (this.estado) {
        case estadosA4.q0:
          if (this.letra === "1") {
            this.estado = estadosA4.q3;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA4.q1;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA4.q1:
          if (this.letra === "1") {
            this.estado = estadosA4.q3;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA4.q2;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA4.q2:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado !";
            return this.aceptacion;
          } else if (this.letra === "1") {
            this.estado = estadosA4.q3;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA4.q2;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA4.q3:
          if (this.letra === "1") {
            this.estado = estadosA4.q4;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA4.q1;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA4.q4:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado !";
            return this.aceptacion;
          } else if (this.letra === "1") {
            this.estado = estadosA4.q4;
            this.nextLetra();
          } else if (this.letra === "0") {
            this.estado = estadosA4.q1;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
      }
    }
  }
  automata5() {
    console.log("Running Automata5");
    this.clear();
    this.nextLetra();
    let i = 0;
    while (i <= 50) {
      i++;
      switch (this.estado) {
        case estadosA5.q0:
          if (this.letra === "a") {
            this.estado = estadosA5.q1;
            this.nextLetra();
          } else if (this.letra === "b") {
            this.estado = estadosA5.q5;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA5.q1:
          if (this.letra === "a") {
            this.estado = estadosA5.q1;
            this.nextLetra();
          } else if (this.letra === "b") {
            this.estado = estadosA5.q2;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA5.q2:
          if (this.letra === "-a") {
            this.aceptacion = "Aceptado!";
          } else if (this.letra === "a") {
            this.estado = estadosA5.q3;
            this.nextLetra();
          } else if (this.letra === "b") {
            this.estado = estadosA5.q2;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
          break;
        case estadosA5.q3:
          if (this.letra === "a") {
            this.estado = estadosA5.q3;
            this.nextLetra();
          } else if (this.letra === "b") {
            this.estado = estadosA5.q3;
            this.nextLetra();
          } else {
            this.aceptacion = "Carácter no Válido";
            return this.aceptacion;
          }
      }
    }
  }
}
