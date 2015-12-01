$(function() {
	var nav = $("#toc");
	$("h1, h2").each(function(idx, el) {
		var $el = $(el)
		$("<a>", {
			class: $el.prop("tagName").toLowerCase(),
			href: "#h"+idx
		}).text($el.text()).appendTo(nav)
		$el.attr("id", "h"+idx)
		var depth = $el.prop("tagName").substring(1);
		console.log($el.prop("tagName"))
	})
})
