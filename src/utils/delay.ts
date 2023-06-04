const delay = (seconds: number) => new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000));

export default delay;
