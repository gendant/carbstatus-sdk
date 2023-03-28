// import './app.css'
import Widget from './Widget.svelte'

const widget = new Widget({
	target: document.getElementById('app'),
	props: { domain: 'example.com', domainColorRGB: '71,174,56' },
	
});

export default widget
