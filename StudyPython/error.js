(function($) {
  /** @type {Array} */
  var configList = [];
  /** @type {Array} */
  var value = ["http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-1.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-2.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-3.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-4.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-5.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-6.png", "http://activity.hdslb.com/zzjs/cartoon/errorPage-manga-7.png"];
  /** @type {boolean} */
  var iterator = false;
  $.ajax({
    url : "http://www.bilibili.com/activity/web/view/data/31",
    type : "get",
    dataType : "json",
    async : false,
    timeout : 3E3,
    /**
     * @param {MessageEvent} event
     * @return {undefined}
     */
    success : function(event) {
      var types = event.data && event.data.list;
      var type;
      for (type in types) {
        configList.push(types[type].data && types[type].data.img);
      }
      /** @type {boolean} */
      iterator = true;
    }
  });
  /**
   * @param {?} last
   * @return {?}
   */
  var process = function(last) {
    /** @type {Array} */
    var computed = iterator ? configList : value;
    /** @type {number} */
    prop = parseInt(Math.random() * computed.length);
    var val = computed[prop];
    if (val != last) {
      return val;
    } else {
      return process(last);
    }
  };
  /**
   * @return {undefined}
   */
  var handler = function() {
    rec_rp("event", "errorpage_btnback_click");
    if (history.length > 2) {
      history.back();
    } else {
      /** @type {string} */
      location.href = document.referrer || "//www.bilibili.com";
    }
  };
  if (history.length > 2 || document.referrer) {
    /** @type {string} */
    var n = "\u6769\u65bf\u6d16\u6d93\u5a41\u7af4\u6924\ufffd"
  } else {
    /** @type {string} */
    n = "\u6769\u65bf\u6d16\u68e3\u682d\u3009";
  }
  var $e = $(".error-container");
  var elm = $e.find(".error-panel");
  var context = $e.find(".error-manga");
  var tref;
  var prop;
  var pic = process();
  /** @type {number} */
  var f = 0;
  window.rec_rp = window.rec_rp || function() {
    (rec_rp.q = rec_rp.q || []).push(arguments);
  };
  rec_rp("event", "errorpage_pageshow", {
    pic : pic,
    url : window.location.href,
    errorType : options.type
  });
  $.getScript("//data.bilibili.com/rec.js");
  if (window.options && options.type == "defaultError") {
    var emptyJ = $('<img src=""/><div></div>');
    elm.addClass("error-404");
    elm.find(".panel");
    $("a.rollback-btn", elm).click(function() {
      handler();
    });
  } else {
    if (window.options && window.options.type == "articleError") {
      var cDigit = window.options && (window.options.data && window.options.data.code);
      switch(parseInt(cDigit)) {
        case 701:
          (function() {
            /** @type {number} */
            var percent = 3;
            elm.css("background-image", "url(//static.hdslb.com/images/error/video_conflict.png)");
            elm.html('<div class="rollback-btn">' + percent + "\u7ec9\u6391\u6097\u9477\ue044\u59e9\u74ba\u5ba0\u6d46</div>");
            if (window.options && (options.data && options.data.url)) {
              elm.find(".rollback-btn").click(function() {
                rec_rp("event", "errorpage_btnback_click");
                location.href = options.data.url;
              });
              setInterval(function() {
                elm.find(".rollback-btn").text(percent + "\u7ec9\u6391\u6097\u9477\ue044\u59e9\u74ba\u5ba0\u6d46");
                percent--;
                if (percent < 0) {
                  location.href = options.data.url;
                }
              }, 1E3);
            }
          })();
          break;
        case 702:
          (function() {
            elm.css("background-image", "url(//static.hdslb.com/images/error/no_video.png)");
            elm.append($('<div class="rollback-btn">' + n + "</div>").click(function() {
              handler();
            }));
          })();
          break;
        case 703:
          (function() {
            elm.css("background-image", "url(//static.hdslb.com/images/error/wait_for_release.png)");
            elm.append($('<div class="rollback-btn">' + n + "</div>").click(function() {
              handler();
            }));
          })();
          break;
        case 704:
          (function() {
            elm.css("background-image", "url(//static.hdslb.com/images/error/wait_for_review.png)");
            elm.append($('<div class="rollback-btn">' + n + "</div>").click(function() {
              handler();
            }));
          })();
          break;
        case 705:
          (function() {
            elm.css("background-image", "url(//static.hdslb.com/images/error/no_video_login.png)");
            elm.append($('<div class="rollback-btn login-btn">\u9427\u8bf2\u7d8d</div>').click(function() {
              rec_rp("event", "errorpage_btnback_click");
              biliQuickLogin(function() {
                location.reload();
              });
            }));
          })();
          break;
        default:
          break;
      }
    }
  }
  context.html("<img src=" + pic + '><a class="change-img-btn">\u93b9\ue76d\u7af4\u5bee\ufffd<a/>');
  $(window).on("scroll.errorpage_tobottm", function() {
    var image = $(".change-img-btn", context);
    var yPosition = $(window).scrollTop() + $(window).height();
    if (yPosition > image.offset().top) {
      rec_rp("event", "errorpage_tobottm");
      $(window).off("scroll.errorpage_tobottm");
    }
  });
  $("a.change-img-btn", context).click(function(dataAndEvents) {
    if ($("a.change-img-btn", context).hasClass("off")) {
      return;
    }
    var last = $("img", context).attr("src");
    rec_rp("event", "errorPage_btnrefresh_click", {
      pic : last,
      url : window.location.href,
      errorType : options.type
    });
    $("img", context).attr("src", process(last)).one("load", function() {
      $("a.change-img-btn", context).removeClass("off");
      clearTimeout(tref);
      rec_rp("event", "errorpage_pageshow", {
        pic : $("img", context).attr("src"),
        url : window.location.href,
        errorType : options.type
      });
    });
    $(this).addClass("off");
    /** @type {number} */
    tref = setTimeout(function() {
      $("a.change-img-btn", context).removeClass("off");
    }, 3E3);
    f++;
    if (f == 100) {
      (new MessageBox).show($(this), "\u9352\ue0a2\u57db\u6d5c\u55ed\u7d1d\u934f\u8dfa\u7584\u6d93\u20ac\u934f\u535e\u6c28" + (configList.length + 1) + "\u5bee\ufffd(\u7ed7\ufffd)", 3E3);
    } else {
      if (f == 200) {
        (new MessageBox).show($(this), "\u6fc2\u85c9\u60c2\u6960\u693e\u7d98\u9428\u52f6\u7d1d\u934f\u8dfa\u7584\u6d93\u20ac\u934f\u535e\u6c28" + configList.length + "\u5bee\ufffd(\u7ed7\ufffd)", 3E3);
      }
    }
  });
  $(".error-split").attr("id", "up");
  $(".change-img-btn").attr("href", "#up");
})(jQuery);
