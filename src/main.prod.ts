// import './app.css'
import Widget from './Widget.svelte'

//prod
const div = document.createElement("DIV");
document.body.insertAdjacentElement('beforeend', div)
const script = document.currentScript;
const domain=script.getAttribute('data-domain')
const hideWidget=script.getAttribute('data-widget') === 'false'

const widget = new Widget({
	target: div,
	props: { domain, hideWidget},
	
});

export default widget
