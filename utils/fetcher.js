function fetcher(...urls) {
  const f = (u) => fetch(u).then((r) => r.json());

  if (urls.length > 1) {
    return Promise.all(urls.map(f));
  }
  return f(urls);
}

export default fetcher;


