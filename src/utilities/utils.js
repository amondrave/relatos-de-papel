function getMinMaxPrice(data) {
    const prices = data.pages
      .flatMap(p => p.items)
      .map(b => b.precio_usd)
      .filter(p => typeof p === "number");
  
    return {
      minPrecio: Math.min(...prices),
      maxPrecio: Math.max(...prices)
    };
  }

export { getMinMaxPrice };