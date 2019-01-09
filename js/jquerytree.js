function inittree(dom, data) {
  $(dom).empty();
  for (var i = 0, len = data.length; i < len; i++) {
    inittreenode(dom, data[i], 0);
  }
  $(".treecontent").on("click", function (e) {
    $(this).children(".icon-right").toggleClass("expandicon");
    $(this).next().slideToggle(300);
  })
}

function inittreenode(dom, data, dataleve) {
  var $treenode = $('<div class="treenode"></div>');
  var $treecontent = $('<div class="treecontent" title="' + data.Title + '"  data-value="' + data.Value + '" data-obj="' + data.Obj + '" style="padding-left:' + dataleve * 12 + 'px">' + data.Text + '</div>');
  if (data.Obj == "menu") {
    $treecontent.prepend($('<i class="iconfont icon-wenjian1"></i>'))
  } else {
    $treecontent.prepend($('<i class="iconfont icon-wenjian"></i>'))
  }
  $treenode.append($treecontent);
  if (data.ChildNodes.length > 0) {
    $treecontent.prepend($('<i class="iconfont icon-right"></i>'))
    var $treegroup = $('<div class="treegroup"></div>');
    dataleve++;
    for (var i = 0, len = data.ChildNodes.length; i < len; i++) {
      inittreenode($treegroup, data.ChildNodes[i], dataleve)
    }
    $treenode.append($treegroup);
  } else {
    $treecontent.prepend($('<i class="iconfont icon-right" style="color:transparent"></i>'))
  }
  $(dom).append($treenode);
}