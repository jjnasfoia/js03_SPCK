
`	<nav>
<ul>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#press">Press</a></li>
    <li><a href="#shop">Shop</a></li>
    <li><a href="#about">About</a></li>
</ul>
</nav>
</header>

<section id="portfolio">
<h2 data-animate="true" >Portfolio</h2>
</section>

<section id="press">
<h2 data-animate="true">Press</h2>
</section>

<section id="shop">
<h2 data-animate="true">Shop</h2>
</section>

<section id="about">
<h2 data-animate="true">About</h2>
</section>

<div id="cursor" class="cursor">
<div class="ring">
<div><!--Border--></div>
</div>
<div class="ring">
<div><!--Pointer--></div>		
</div>
</div>`

class IntersectionObserverList {
	mapping;
	observer;
	constructor() {
		this.mapping = new Map();
		this.observer = new IntersectionObserver(
			(entries) => {
				for (var entry of entries) {
					var callback = this.mapping.get(entry.target);

					callback && callback(entry.isIntersecting);
				}
			},
			{
				rootMargin: "300px 0px 300px 0px"
			}
		);
	}
	add(element, callback) {
		this.mapping.set(element, callback);
		this.observer.observe(element);
	}
	ngOnDestroy() {
		this.mapping.clear();
		this.observer.disconnect();
	}
	remove(element) {
		this.mapping.delete(element);
		this.observer.unobserve(element);
	}
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

$('[data-animate="true"]').each(function (i) {
	console.log("$(this)", $(this))
	var element = $(this)[0];
	observer.add(element, (isIntersecting) => {
		if (isIntersecting) {
			$(this).addClass("animate-slide-down")
		} else {
			$(this).removeClass("animate-slide-down")
		}
	});
});
