const mix = (methods) => {
  const [a, c, p] = methods;
  [window[a], window[c], window[p]] = [window[p], window[a], window[c]];
};

mix(["alert", "confirm", "prompt"]);
