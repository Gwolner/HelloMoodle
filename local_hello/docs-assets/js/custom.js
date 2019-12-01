window.$(document).ready(function() {

  window._gaq = window._gaq || [];
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  ga.onload = function() {
    window._gaq.push(['_setAccount', 'UA-99607835-2']);
    window._gaq.push(['_trackPageview']);
  };
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);

  window.Raven.config('https://1b10a9480b0047139033f6d750701528@sentry.io/1265128').install();

  var $ = window.$;
  var
    $body = $('body'),
    $menuToggle = $('#menu_toggle'),
    $sideBarMenu = $('#sidebar-menu'),
    $sideBarFooter = $('.sidebar-footer'),
    $leftCol = $('.left_col'),
    $rigthCol = $('.right_col'),
    $navMenu = $('.nav_menu'),
    $footer = $('footer');

  var setContentHeight = function() {
    $rigthCol.css('min-height', $(window).height());

    var bodyHeight = $body.outerHeight(),
      footerHeight = $body.hasClass('footer_fixed') ? 0 : $footer.height(),
      leftColHeight = $leftCol.eq(1).height() + $sideBarFooter.height(),
      contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= $navMenu.height() + footerHeight;

    $rigthCol.css('min-height', contentHeight);
  };

  setContentHeight();

  /*
  $sideBarMenu.find('a').on('click', function(ev) {
    var $li = $(this).parent();

    if ($li.is('.active')) {
      $li.removeClass('active active-sm');
      $('ul:first', $li).slideUp(function() {
        setContentHeight();
      });
    } else {
      // prevent closing menu if we are on child menu
      if (!$li.parent().is('.child_menu')) {
        $sideBarMenu.find('li').removeClass('active active-sm');
        $sideBarMenu.find('li ul').slideUp();
      }

      $li.addClass('active');

      $('ul:first', $li).slideDown(function() {
        setContentHeight();
      });
    }
  });
  */

  $menuToggle.on('click', function() {
    if ($body.hasClass('nav-md')) {
      $sideBarMenu.find('li.active ul').hide();
      $sideBarMenu.find('li.active').addClass('active-sm').removeClass('active');
    } else {
      $sideBarMenu.find('li.active-sm ul').show();
      $sideBarMenu.find('li.active-sm').addClass('active').removeClass('active-sm');
    }

    $body.toggleClass('nav-md nav-sm');

    setContentHeight();
  });
});
