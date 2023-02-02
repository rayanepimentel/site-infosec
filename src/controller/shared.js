exports.sharedTw = function(texto) {
  const url ="https://twitter.com/share?ref_src=twsrc%5Etfw" 
  const dataText= texto;
  return `<a href=${url} class="twitter-share-button" data-text="${dataText}" data-lang="pt" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
}

exports.sharedLink = function(urlPage) {
  const url = urlPage;
  const linkedin = 'https://www.linkedin.com/sharing/share-offsite/';
  return `<a href='${linkedin}?url=https://infosec-iniciante.onrender.com${url}', target="_blank" style="color: #FCFCFB; background-color: #477EAE; border-radius: 5px;"><i class="fa fa-linkedin fa-fw"></i></a>`;
}
