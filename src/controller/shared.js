exports.sharedTw = function(texto) {
  console.log('aquooo', texto)
  const url ="https://twitter.com/share?ref_src=twsrc%5Etfw" 
  const dataText= texto;
  return `<a href=${url} class="twitter-share-button" data-text="${dataText}" data-lang="pt" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
}
