let isEN=window.location.pathname.startsWith("/en");$((function(){isEN?$("header .lang-btn").html("ZH"):$("header .lang-btn").html("EN")})),$("header .menu").on("click",(function(){$("nav ul").show(),$("header .menu").hide(),$("header .close").show(),$("body").css({"overflow-x":"hidden","overflow-y":"hidden"})})),$("header .lang-btn").on("click",(function(){window.location=isEN?"/":"/en/"})),$("header .close").on("click",(function(){$("nav ul").hide(),$("header .menu").show(),$("header .close").hide(),$("body").css({"overflow-x":"auto","overflow-y":"auto"})})),$(".nav-menu li").removeClass("current"),$(".nav-menu a").each(((e,n)=>{let o=window.location.href,a=$(n).attr("href").split("/"),l=a[a.length-1];-1!=o.indexOf(l)&&$(n).parent().addClass("current")}));