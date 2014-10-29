(function () {
    'use strict';

    var conf = {};

    // Init functions, called on DOMContentLoaded event
    conf.init = function () {
        conf.map.init($('#map-canvas'));
        conf.menu.init();
    };

    /***
        Google Maps implementation
    ***/
    conf.map = {
        marker: 'themes/yellow-swan/img/marker-default.png'
    };

    // Google Maps configs
    conf.map.init = function ($element) {
        conf.map.element = $element;

        conf.map.geocoder = new google.maps.Geocoder();

        conf.map.latlng = new google.maps.LatLng(0, 0);

        conf.map.options = {
            zoom: 16,
            center: conf.map.latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        conf.map.canvas = new google.maps.Map(conf.map.element.get(0), conf.map.options);
        conf.map.canvas.setCenter(conf.map.latlng);

        conf.map.createMarker();
    };

    conf.map.createMarker = function () {
        
        conf.map.address = conf.map.element.attr('data-address');

        conf.map.geocoder.geocode({ 'address': conf.map.address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                conf.map.canvas.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: conf.map.canvas,
                    position: results[0].geometry.location,
                    icon: conf.map.marker
                });
            } else {
                if (window.console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    };

    /***
        Create animated scroll for menu links
    ***/
    conf.menu = {
        itemsSelector: '.nav-link[href^="#"]',
        animationSpeed: 400
    };

    conf.menu.init = function () {
        conf.menu.menuItems = $(conf.menu.itemsSelector);
        conf.menu.document = $('html, body');

        conf.menu.menuItems.on('click.animateScroll', function (event) {
            event.preventDefault();

            conf.menu.animateTo(event.target);
        });
    };

    conf.menu.animateTo = function (link) {

        var $link = $(link),
            href = $link.attr('href'),
            offSetTop = $(href).offset().top;
        
        conf.menu.document.finish().animate({scrollTop : offSetTop}, conf.menu.animationSpeed, function () {
            location.hash = href;
        });
    };

    conf.init();
}());

!function () {
  function ScrollSpy() {
    this.scrollLast = 0
    this.nav = document.querySelector('[data-nav]')
    this.active = null
  }

  ScrollSpy.prototype.init = function () {
    this.addEventListeners()
    this.updateSections()
  }

  ScrollSpy.prototype.updateSections = function () {
    var elements = document.querySelectorAll('header, section')
    this.sections = this.getSections(elements)
    this.nav_offset = this.nav.getBoundingClientRect().top + window.pageYOffset;
    this.menu()
  }

  ScrollSpy.prototype.getSections = function (elements) {
    return [].slice.call(elements).map(function (element) {
      return {
        id: element.id
      , offset: element.getBoundingClientRect().top + window.pageYOffset - 20
      }
    })
  }

  ScrollSpy.prototype.getActive = function () {
    var scroll = window.pageYOffset
      , section

    for (var i = 0, l = this.sections.length; i < l; i++) {
      this.sections[i].offset <= scroll && (section = this.sections[i])
    }
    return section.id
  }

  ScrollSpy.prototype.addEventListeners = function () {
    document.addEventListener('scroll', this.onScroll.bind(this))
    document.addEventListener('DOMContentLoaded', this.updateSections.bind(this))
    document.addEventListener('resize', this.updateSections.bind(this))
    window.addEventListener('load', this.updateSections.bind(this))
  }

  ScrollSpy.prototype.onScroll = function (event) {
    if ((Date.now() - this.scrollLast) > 50) {
      this.scrollLast = Date.now()
      this.menu()
    }
  }

  ScrollSpy.prototype.menu = function () {
    var id = this.getActive()
      , item = this.nav.querySelector('a[href="#' + id + '"]')

    this.active && this.active.classList.remove('current')
    item && item.classList.add('current')
    this.nav.classList[this.nav_offset < window.pageYOffset ? 'add' : 'remove']('main-menu-fixed')
    this.active = item
  }

  ;(new ScrollSpy).init()
}();