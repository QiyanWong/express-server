const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const logger = require('./middleware/logger')

const app = express();

const PORT = process.env.PORT || 5000;

//Init midlleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//Set static folder
// app.use(express.static(path.join(__dirname, "public")));


//Homepage route
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Member App',
		members,
	});
	
})
// Members API routes
app.use('/api/members', require('./routes/api/members'));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


