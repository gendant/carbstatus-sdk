// import './app.css'
import Widget from './Widget.svelte'

//prod
const div = document.createElement("DIV");
const script = document.currentScript;
script.parentNode.insertBefore(div, script);
const domain=script.getAttribute('data-domain')

const widget = new Widget({
	//dev
	target: div,
	props: { domain},
	
});

export default widget
