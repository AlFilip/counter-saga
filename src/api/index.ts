export const makeOperation = (): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
