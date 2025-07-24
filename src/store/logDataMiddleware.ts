const logDataAction = () => (next: any) => (action: any) => {
  const copy = JSON.parse(JSON.stringify(action));
  console.log('LogDataAction:', copy);
  return next(action);
};

export default logDataAction;
