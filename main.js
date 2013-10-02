var system = require('hype');
var routes = require('./routes/main');

app = system.init({
	default_routes: true,
	native_middleware: true,
	sessions: true,
	staff_mode: true,
	logger: true,
	validator: true,
	pjax: true,
	user: true,
	nav: true,
	template_dir: __dirname+"/templates",
	public_dir: __dirname+"/public",
	view_engine: "jade",
	conf: __dirname+"/conf.json",
	error_pages: true
});

app.set('title', 'Hype');

//Define your routes here.
app.get('/', routes.index);

system.listen(app, {
	io: false,
	https: false,
	http: true
});