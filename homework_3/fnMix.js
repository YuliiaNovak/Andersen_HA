const mix = (methods) => {
  const [alert, confirm, prompt] = methods;
  [window[alert], window[confirm], window[prompt]] = [window[prompt], window[alert], window[confirm]];
};

mix(["alert", "confirm", "prompt"]);
