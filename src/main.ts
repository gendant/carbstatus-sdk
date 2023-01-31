// import './app.css'
import Widget from './Widget.svelte'

const widget = new Widget({
	target: document.getElementById('app'),
	props: { domain: 'example.com'},
	
});

export default widget
