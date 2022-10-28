var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

function switchTabs(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodes.length; i++) {
      if (event.target === $tabNodes[i]) {
        $tabNodes[i].className = 'tab active';
        var dataView = event.target.getAttribute('data-view');
        for (var j = 0; j < $viewNodes.length; j++) {
          if ($viewNodes[j].getAttribute('data-view') === dataView) {
            $viewNodes[j].className = 'view';
          } else {
            $viewNodes[j].className = 'view hidden';
          }
        }
      } else {
        $tabNodes[i].className = 'tab';
      }
    }
  }
}

$tabContainer.addEventListener('click', switchTabs);
