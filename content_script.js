const tags = document.getElementsByTagName("script");
var s = new XMLSerializer();

const trackers = [
	"quantserve",
	"scorecardresearch",
	"google-analytics",
	"adservice",
	"securepubads",
	"googletagservices",
	"twimg",
	"connect.facebook",
	"hotjar",
	"pubmatic",
	"stack-sonar",
	"qubit",
	"leadforensics",
	"px.ads.linkedin",
	"googlesyndication"
];

const flatten = arr =>
	arr.reduce((flat, toFlatten) => {
		return flat.concat(
			Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
		);
	}, []);

const scripts = Array.from(tags)
	.map(t => Array.from(t.attributes))
	.filter(t => t.length)
	.map(t =>
		t.filter(
			t =>
				s.serializeToString(t).length > 0 &&
				s.serializeToString(t) !== "text/javascript"
		)
	);

const checker = value => {
	for (var i = 0; i < trackers.length; i++) {
		if (value.indexOf(trackers[i]) > -1) {
			return true;
		}
	}
	return false;
};

const returnValue = flatten(scripts)
	.map(t => s.serializeToString(t))
	.filter(checker);

console.log(returnValue);

if (returnValue.length > 1) {
	console.log("here");
	var iDiv = document.createElement("div");
	iDiv.className = "failed";
	iDiv.innerHTML = `<img src='https://wwwcache.wralsportsfan.com/asset/colleges/2016/09/01/15978320/explosion_2-240x320.gif' />
		<h1 style="color: white;">This page has ${returnValue.length} trackers</h1>`;

	iDiv.setAttribute(
		"style",
		`
		position: fixed;
    z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
		width: 100%;
		height: 100%;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.9);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
    top: 0;
		`
	);
	document.getElementsByTagName("body")[0].appendChild(iDiv);
}
