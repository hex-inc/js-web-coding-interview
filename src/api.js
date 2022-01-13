import { v4 as uuid } from "uuid";

class DefaultServer {
  cellData = [
    {
      id: uuid(),
      text: "hello world"
    }
  ];

  static FAILURE_PERCENT = 0.0;
  static SERVER_DELAY = 0;

  getCells() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > DefaultServer.FAILURE_PERCENT) {
          resolve(this.cellData);
        } else {
          reject("Server error");
        }
      }, DefaultServer.SERVER_DELAY);
    });
  }

  updateCells(newCells) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > DefaultServer.FAILURE_PERCENT) {
          this.cellData = [...newCells];
          resolve();
        } else {
          reject("Server error");
        }
      }, DefaultServer.SERVER_DELAY);
    });
  }
}

export const SERVER = new DefaultServer();
